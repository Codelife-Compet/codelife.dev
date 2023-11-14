import { SlidesPrismaRepository } from "../../repositories/slidesPrismaRepository"
import { CreateSlideUseCase } from "./createSlideUseCase"

export function makeCreateSlideUseCase() {
    const slidesRepository = new SlidesPrismaRepository()
    const useCase = new CreateSlideUseCase(slidesRepository)

    return useCase
}