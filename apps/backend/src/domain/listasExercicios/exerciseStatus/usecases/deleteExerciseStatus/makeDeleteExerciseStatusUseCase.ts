import { ExerciseStatusPrismaRepository } from "../../repositories/exerciseStatusPrismaRepository"
import { DeleteExerciseStatusUseCase } from "./deleteExerciseStatusUseCase"

export function makeDeleteExerciseStatusUseCase() {
    const exerciseStatusPrismaRepository = new ExerciseStatusPrismaRepository()
    const useCase = new DeleteExerciseStatusUseCase(exerciseStatusPrismaRepository)

    return useCase
}