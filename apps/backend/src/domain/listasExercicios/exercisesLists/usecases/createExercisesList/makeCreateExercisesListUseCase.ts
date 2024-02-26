import { CreateExerciseListUseCase } from "./createExercisesListUseCase"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"

export function makeCreateExerciseListUseCase() {
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const useCase = new CreateExerciseListUseCase(exercisesListsPrismaRepository)

    return useCase
}