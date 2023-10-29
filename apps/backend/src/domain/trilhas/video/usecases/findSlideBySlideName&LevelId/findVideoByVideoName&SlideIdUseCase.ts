import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { Video } from "@/domain/trilhas/@entities/video"

interface FindVideoByVideoKey_SlideIdRequest {
    videoKey: string,
    slideId: string
}

type FindVideoByVideoKey_SlideIdResponse = Either<
    ResourceNotFoundError,
    { video: Video }
>

export class FindVideoByVideoKey_SlideId {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ slideId, videoKey }: FindVideoByVideoKey_SlideIdRequest): Promise<FindVideoByVideoKey_SlideIdResponse> {

        const video = await this.videosRepository.findVideoByVideoKey_SlideId(videoKey, slideId)

        if (!video)
            return left(new ResourceNotFoundError("User"))

        return right({ video })
    }
}