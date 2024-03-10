import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Video } from "./video";

export type YoutubePlaylistProps = {
  youtubeId: string
  videos: Video[]
}

export class YoutubePlaylist extends Entity<YoutubePlaylistProps> {

    constructor(props: YoutubePlaylistProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get youtubeId() { return this.props.youtubeId }
    get videos() { return this.props.videos }
}
