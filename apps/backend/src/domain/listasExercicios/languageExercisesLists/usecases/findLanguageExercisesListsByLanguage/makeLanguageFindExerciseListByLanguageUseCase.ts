import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { FindLanguageExercisesListByLanguageUseCase } from "./findLanguageExerciseListByLanguageUseCase"

export function makeFindLanguageExercisesListByLanguageUseCase() {
    const exerciselistsRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new FindLanguageExercisesListByLanguageUseCase(exerciselistsRepository)

    return useCase
}