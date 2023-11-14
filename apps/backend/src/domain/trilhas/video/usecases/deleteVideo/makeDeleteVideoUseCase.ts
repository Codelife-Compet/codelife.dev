import { VideosPrismaRepository } from "../../repositories/videosPrismaRepository"
import { DeleteVideoUseCase } from "./deleteVideoUseCase"

export function makeDeleteVideoUseCase() {
    const videosRepository = new VideosPrismaRepository()
    const useCase = new DeleteVideoUseCase(videosRepository)

    return useCase
}