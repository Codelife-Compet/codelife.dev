import { ExercisesPrismaRepository } from "@/domain/listasExercicios/exercises/repositories/exercisesPrismaRepository"
import { RemoveExerciseUseCase } from "./removeExercisesListUseCase"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"

export function makeRemoveExerciseUseCase() {
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const exercisesPrismaRepository = new ExercisesPrismaRepository()
    const useCase = new RemoveExerciseUseCase(exercisesListsPrismaRepository, exercisesPrismaRepository)

    return useCase
}