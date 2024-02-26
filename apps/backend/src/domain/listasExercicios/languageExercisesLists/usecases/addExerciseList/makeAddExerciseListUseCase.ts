import { LanguageExercisesListsPrismaRepository } from "../../repositories/languageExercisesListPrismaRepository"
import { ExercisesListsPrismaRepository } from "@/domain/listasExercicios/exercisesLists/repositories/exercisesListsPrismaRepository"
import { AddExercisesListUseCase } from "./addExerciseListUseCase"

export function makeAddExercisesListUseCase() {
    const languageExercisesListsPrismaRepository = new LanguageExercisesListsPrismaRepository()
    const usersRepository = new ExercisesListsPrismaRepository()
    const useCase = new AddExercisesListUseCase(languageExercisesListsPrismaRepository, usersRepository)

    return useCase
}