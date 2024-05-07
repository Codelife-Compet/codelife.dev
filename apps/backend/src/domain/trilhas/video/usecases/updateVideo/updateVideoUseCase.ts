import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { UpdateVideoProps, Video } from "@/domain/trilhas/@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"

interface UpdateVideoUseCaseRequest {
    id: string
    data: UpdateVideoProps
}

type UpdateVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { video: Video }
>

export class UpdateVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ id, data }: UpdateVideoUseCaseRequest): Promise<UpdateVideoUseCaseResponse> {

        const video = await this.videosRepository.update(id, data)

        if (!video)
            return left({ error: new ResourceNotFoundError(`Video ${id}`) })

        return right({ video })
    }
}