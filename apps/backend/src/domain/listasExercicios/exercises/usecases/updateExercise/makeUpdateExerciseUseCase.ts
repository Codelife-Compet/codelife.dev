import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { UpdateExerciseUseCase } from "./updateExerciseUseCase"

export function makeUpdateExerciseUseCase() {
    const exercisesRepository = new ExercisesPrismaRepository()
    const useCase = new UpdateExerciseUseCase(exercisesRepository)

    return useCase
}