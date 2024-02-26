import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { DeleteExerciseUseCase } from "./deleteExerciseUseCase"

export function makeDeleteExerciseUseCase() {
    const exercisesRepository = new ExercisesPrismaRepository()
    const useCase = new DeleteExerciseUseCase(exercisesRepository)

    return useCase
}