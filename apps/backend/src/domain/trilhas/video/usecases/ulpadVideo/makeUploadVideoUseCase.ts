import { VideosPrismaRepository } from "../../repositories/videosPrismaRepository"
import { UploadVideoUseCase } from "./uploadVideoUseCase"

export function makeUploadVideoUseCase() {
    const videosRepository = new VideosPrismaRepository()
    const useCase = new UploadVideoUseCase(videosRepository)

    return useCase
}