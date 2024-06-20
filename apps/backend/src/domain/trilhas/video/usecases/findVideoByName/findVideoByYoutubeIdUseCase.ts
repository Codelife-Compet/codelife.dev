import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { Video } from "@/domain/trilhas/@entities/video"

interface FindVideoByYoutubeIdRequest {
    youtubeId: string,
    slideId: string
}

type FindVideoByYoutubeIdResponse = Either<
    { error: ResourceNotFoundError },
    { video: Video }
>

export class FindVideoByYoutubeIdUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ slideId, youtubeId }: FindVideoByYoutubeIdRequest): Promise<FindVideoByYoutubeIdResponse> {

        const video = await this.videosRepository.findByYoutubeId(youtubeId, slideId)

        if (!video)
            return left({ error: new ResourceNotFoundError(`Video ${youtubeId} in slide ${slideId}`) })

        return right({ video })
    }
}