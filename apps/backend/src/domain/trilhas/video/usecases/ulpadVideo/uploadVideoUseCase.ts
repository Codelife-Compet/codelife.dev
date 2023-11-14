import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Video } from "../../../@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { FindVideoByVideoKey_SlideId } from "../findSlideBySlideName&LevelId/findVideoByVideoName&SlideIdUseCase"

interface UploadVideoUseCaseRequest {
    directory: string
}

type UploadVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { success: boolean }
>

export class UploadVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ directory }: UploadVideoUseCaseRequest): Promise<UploadVideoUseCaseResponse> {

        const success = await this.videosRepository.upload(directory)

        return right({ success })
    }
}