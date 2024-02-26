import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { FetchExercisesUseCase } from "./fetchExercisesListsUseCase"

export function makeFetchExercisesUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new FetchExercisesUseCase(languageExercisesListsPrismaRepository)

    return useCase
}