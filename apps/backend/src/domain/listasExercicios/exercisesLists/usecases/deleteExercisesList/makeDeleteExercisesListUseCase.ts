import { DeleteExerciseListUseCase } from "./deleteExercisesListUseCase"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"

export function makeDeleteExercisesListUseCase() {
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const useCase = new DeleteExerciseListUseCase(exercisesListsPrismaRepository)

    return useCase
}