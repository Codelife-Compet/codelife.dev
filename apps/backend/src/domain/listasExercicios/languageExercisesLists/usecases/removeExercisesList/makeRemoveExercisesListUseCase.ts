import { ExercisesListsPrismaRepository } from "@/domain/listasExercicios/exercisesLists/repositories/exercisesListsPrismaRepository"
import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { RemoveExercisesListUseCase } from "./removeExercisesListUseCase"

export function makeRemoveExercisesListUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const useCase = new RemoveExercisesListUseCase(languageExercisesListsPrismaRepository, exercisesListsPrismaRepository)

    return useCase
}