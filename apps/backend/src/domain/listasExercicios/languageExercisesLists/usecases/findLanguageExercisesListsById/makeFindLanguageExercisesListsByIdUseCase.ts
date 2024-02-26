import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { FindLanguageExercisesListByIdUseCase } from "./findLanguageExercisesListsByIdUseCase"

export function makeFindLanguageExercisesListByIdUseCase() {
    const exerciselistsRepository = new LanguageExercisesListsPrismaRepository()
    const useCase = new FindLanguageExercisesListByIdUseCase(exerciselistsRepository)

    return useCase
}