import { FindExerciseStatusByIdUseCase } from "./findIsExerciseStatusByIdUseCase"
import { ExerciseStatusPrismaRepository } from "../../repositories/exerciseStatusPrismaRepository"

export function makeFindExerciseStatusByIdUseCase() {
    const exerciseStatusPrismaRepository = new ExerciseStatusPrismaRepository()
    const useCase = new FindExerciseStatusByIdUseCase(exerciseStatusPrismaRepository)

    return useCase
}