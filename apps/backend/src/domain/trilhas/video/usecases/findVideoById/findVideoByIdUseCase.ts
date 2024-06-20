import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { Video } from "@/domain/trilhas/@entities/video"

interface FindVideoByIdRequest {
    id: string
}

type FindVideoByIdResponse = Either<
    { error: ResourceNotFoundError },
    { video: Video }
>

export class FindVideoByIdUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ id }: FindVideoByIdRequest): Promise<FindVideoByIdResponse> {

        const video = await this.videosRepository.findById(id)

        if (!video)
            return left({ error: new ResourceNotFoundError(`Video ${id}`) })

        return right({ video })
    }
}