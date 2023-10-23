import { VideosPrismaRepository } from "../../repositories/videosPrismaRepository"
import { CreateVideoUseCase } from "./createVideoUseCase"

export function makeCreateVideoUseCase() {
    const videosRepository = new VideosPrismaRepository()
    const useCase = new CreateVideoUseCase(videosRepository)

    return useCase
}