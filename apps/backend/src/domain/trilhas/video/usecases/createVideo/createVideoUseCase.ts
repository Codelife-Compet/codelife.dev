import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Video } from "../../../@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { findVideoByYoutubeId } from "../findVideoByName/findVideoByYoutubeIdUseCase"

interface CreateVideoUseCaseRequest {
    youtubeId: string,
    youtubePlaylistId: string | null
    slideId: string,
}

type CreateVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { video: Video }
>

export class CreateVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ slideId, youtubeId, youtubePlaylistId }: CreateVideoUseCaseRequest): Promise<CreateVideoUseCaseResponse> {

        const findVideoByYoutubeId = new findVideoByYoutubeId(this.videosRepository)

        const possibleVideo = await findVideoByYoutubeId.execute({ slideId, videoKey: youtubeId })

        if (possibleVideo.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Slides's ${slideId} video`) })
        }

        const video = await this.videosRepository.create(new Video({slideId, youtubeId, youtubePlaylistId }))

        return right({ video })
    }
}