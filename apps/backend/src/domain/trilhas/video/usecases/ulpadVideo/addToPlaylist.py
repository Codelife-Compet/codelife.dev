import httplib2
import os
import sys

from apiclient.discovery import build
from oauth2client.client import flow_from_clientsecrets
from oauth2client.file import Storage
from oauth2client.tools import argparser, run_flow

CLIENT_SECRETS_FILE = "client-oauth2.json"
MISSING_CLIENT_SECRETS_MESSAGE = """
WARNING: Please configure OAuth 2.0

To make this sample run you will need to populate the client_secrets.json file
found at:

%s

with information from the Cloud Console
https://cloud.google.com/console

For more information about the client_secrets.json file format, please visit:
https://developers.google.com/api-client-library/python/guide/aaa_client_secrets
""" % os.path.abspath(os.path.join(os.path.dirname(__file__),CLIENT_SECRETS_FILE))
YOUTUBE_SCOPE = "https://www.googleapis.com/auth/youtube"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

def get_authenticated_service():
    flow = flow_from_clientsecrets(CLIENT_SECRETS_FILE, scope=YOUTUBE_SCOPE,
    message=MISSING_CLIENT_SECRETS_MESSAGE)

    storage = Storage("%s-oauth2.json" % sys.argv[0])
    credentials = storage.get()

    if credentials is None or credentials.invalid:
        credentials = run_flow(flow, storage)  # Updated function call

    return build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
        http=credentials.authorize(httplib2.Http()))

def check_if_video_exists_in_playlist(youtube,videoID,playlistID):
    playlistitems_list_request = youtube.playlistItems().list(
    playlistId=playlistID,
    part="snippet",
    maxResults=50
    )

    while playlistitems_list_request:
        playlistitems_list_response = playlistitems_list_request.execute()

        for playlist_item in playlistitems_list_response["items"]:
            if playlist_item["snippet"]["resourceId"]["videoId"] == videoID:
                return True

        playlistitems_list_request = youtube.playlistItems().list_next(
        playlistitems_list_request, playlistitems_list_response)

    return False

def add_video_to_playlist(youtube,videoID,playlistID):
    add_video_request=youtube.playlistItems().insert(
    part="snippet",
    body={
        'snippet': {
          'playlistId': playlistID, 
          'resourceId': {
                  'kind': 'youtube#video',
              'videoId': videoID
            }
        #'position': 0
        }
    }).execute()

def create_playlist(youtube,playlistTitle,playlistDescription="",privacyStatus="private"):
    playlists_insert_response = youtube.playlists().insert(
    part="snippet,status",
    body=dict(
        snippet=dict(
            title=playlistTitle,
            description=playlistDescription
        ),
        status=dict(
            privacyStatus=privacyStatus
        )
    )).execute()

    return playlists_insert_response["id"]

def check_if_playlist_exists_by_playlist_title(youtube, playlistTitle):
    playlists_list_response = youtube.playlists().list(
        part="snippet",
        mine=True
    ).execute()

    for playlist in playlists_list_response["items"]:
        if playlist["snippet"]["title"] == playlistTitle:
            return playlist["id"]

    return None

if __name__ == '__main__':
    argparser.add_argument("--title", help="Playlist Title", required=True)
    argparser.add_argument("--videoId", help="Video Id", required=True)
    argparser.add_argument("--description", help="Playlist Description", default="")
    argparser.add_argument("--privacyStatus", help="Privacy Status", default="private")
    args = argparser.parse_args()

    youtube = get_authenticated_service()

    playlistId = check_if_playlist_exists_by_playlist_title(youtube, args.title)
    if playlistId is None:
        playlistId = create_playlist(youtube, args.title, args.description)

    print("Playlist id: " + playlistId)

    if not check_if_video_exists_in_playlist(youtube,args.videoId, playlistId):
        add_video_to_playlist(youtube,args.videoId, playlistID=playlistId)