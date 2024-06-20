import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { EexecutePythonScript } from "@/core/python/executePythonScript"
import { PythonShellError } from "python-shell"
import { Video } from "@/domain/trilhas/@entities/video"

interface UploadVideoUseCaseRequest {
    video: {
        vtitle: string
        vdescription: string
        vprivacyStatus: string
        file: string
    }, playlist: {
        ptitle: string
        pdescription: string
        pprivacyStatus: string
    },
    slideId: string
}

type UploadVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { video: Video }
>

export class UploadVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ video, playlist, slideId }: UploadVideoUseCaseRequest): Promise<UploadVideoUseCaseResponse> {

        const { vdescription, file, vprivacyStatus, vtitle } = video

        const uploadVideoResponse = await EexecutePythonScript({
            pathRequest: {
                dirname: __dirname,
                partialPath: "upload.py"
            },
            args: ["--file", file, "--title", vtitle, "--description", vdescription, "--privacyStatus", vprivacyStatus]
        })
        if (uploadVideoResponse.isLeft())
            return left({ error: uploadVideoResponse.value.error })

        const response = uploadVideoResponse.value.response[uploadVideoResponse.value.response.length - 1];
        const match = response.match(/^VideoId:\s*(\S+)/);
        const videoId = match ? match[1] : null;
        if (!videoId)
            return left({ error: new PythonShellError("Erro ao extrair o VideoId.") })

        const { pdescription, pprivacyStatus, ptitle } = playlist
        const addVideoToPlaylistResponse = await EexecutePythonScript({
            pathRequest: {
                dirname: __dirname,
                partialPath: "addToPlaylist.py"
            },
            args: ["--title", ptitle, "--description", pdescription, "--privacyStatus", pprivacyStatus, "--videoId", videoId]
        })
        if (addVideoToPlaylistResponse.isLeft())
            return left({ error: addVideoToPlaylistResponse.value.error })

        const youtubePlaylistId = addVideoToPlaylistResponse.value.response[addVideoToPlaylistResponse.value.response.length - 1]

        // TODO: testar se playlistId funciona
        const createdVideo = await this.videosRepository.create(new Video({ slideId, youtubeId: videoId, youtubePlaylistId }))

        return right({ video: createdVideo })
    }
}