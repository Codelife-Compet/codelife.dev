import { Either, left, right } from "@/core/types/either"
import { Video } from "../../../@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface DeleteVideoUseCaseRequest {
    id: string
}

type DeleteVideoUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { video: Video }
>

export class DeleteVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ id }: DeleteVideoUseCaseRequest): Promise<DeleteVideoUseCaseResponse> {

        const video = await this.videosRepository.delete(id)

        if (!video)
            return left({ error: new ResourceNotFoundError(`Video ${id}`) })

        // TODO: remover do youtube

        return right({ video })
    }
}