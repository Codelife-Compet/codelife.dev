import { SlidesPrismaRepository } from "../../repositories/slidesPrismaRepository"
import { GetVideoLinkUseCase } from "./getVideoLinkUseCase"

export function makeGetVideoLinkVideoUseCase() {
    const slidesRepository = new SlidesPrismaRepository()
    const useCase = new GetVideoLinkUseCase(slidesRepository)

    return useCase
}