import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Video } from "../../../@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { FindVideoByVideoKey_SlideId } from "../findSlideBySlideName&LevelId/findVideoByVideoName&SlideIdUseCase"

interface DeleteVideoUseCaseRequest {
    directory: string
}

type DeleteVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { success: boolean }
>

export class DeleteVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ directory }: DeleteVideoUseCaseRequest): Promise<DeleteVideoUseCaseResponse> {

        const success = await this.videosRepository.delete(directory)

        return right({ success })
    }
}