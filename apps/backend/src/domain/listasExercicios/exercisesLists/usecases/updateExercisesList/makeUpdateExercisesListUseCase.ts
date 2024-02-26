import { UpdateExerciseListUseCase } from "./updateExercisesListUseCase"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"

export function makeUpdateExerciseListUseCase() {
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const useCase = new UpdateExerciseListUseCase(exercisesListsPrismaRepository)

    return useCase
}