import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { FindExerciseByIdUseCase } from "./findExerciseByIdUseCase"

export function makeFindExerciseByIdUseCase() {
    const exercisesRepository = new ExercisesPrismaRepository()
    const useCase = new FindExerciseByIdUseCase(exercisesRepository)

    return useCase
}