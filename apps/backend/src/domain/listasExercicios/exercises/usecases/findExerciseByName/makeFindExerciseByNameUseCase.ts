import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { FindExerciseByNameUseCase } from "./findExerciseByNameUseCase"

export function makeFindExerciseByNameUseCase() {
    const exercisesRepository = new ExercisesPrismaRepository()
    const useCase = new FindExerciseByNameUseCase(exercisesRepository)

    return useCase
}