import { FindExerciseStatusByUserNameUseCase } from "./findIsExerciseStatusByUserNameUseCase"
import { ExerciseStatusPrismaRepository } from "../../repositories/exerciseStatusPrismaRepository"

export function makeFindExerciseStatusByUserNameUseCase() {
    const exercisesRepository = new ExerciseStatusPrismaRepository()
    const useCase = new FindExerciseStatusByUserNameUseCase(exercisesRepository)

    return useCase
}