import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { CreateExerciseUseCase } from "./createExerciseUseCase"

export function makeCreateExerciseUseCase() {
    const exercisesRepository = new ExercisesPrismaRepository()
    const useCase = new CreateExerciseUseCase(exercisesRepository)

    return useCase
}