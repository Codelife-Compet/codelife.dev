import { ExerciseStatusPrismaRepository } from "../../repositories/exerciseStatusPrismaRepository"
import { updateExerciseStatusUseCase } from "./updateExerciseStatusUseCase"

export function makeUpdateExerciseStatusUseCase() {
    const exerciseStatusPrismaRepository = new ExerciseStatusPrismaRepository()
    const useCase = new updateExerciseStatusUseCase(exerciseStatusPrismaRepository)

    return useCase
}