import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { UpdateLanguageExercisesListUseCase } from "./updateLanguageExercisesListUseCase"

export function makeUpdateLanguageExercisesListUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new UpdateLanguageExercisesListUseCase(languageExercisesListsPrismaRepository)

    return useCase
}