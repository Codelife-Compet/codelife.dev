import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { CreateLanguageExercisesListUseCase } from "./createLanguageExercisesListUseCase"

export function makeCreateLanguageExercisesListUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new CreateLanguageExercisesListUseCase(languageExercisesListsPrismaRepository)

    return useCase
}