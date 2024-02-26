import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { DeleteLanguageExercisesListUseCase } from "./deleteLanguageExercisesListUseCase"

export function makeDeleteLanguageExercisesListUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new DeleteLanguageExercisesListUseCase(languageExercisesListsPrismaRepository)

    return useCase
}