import { FetchExercisesUseCase } from "./fetchExercisesUseCase"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"

export function makeFetchExercisesUseCase() {
    const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository()
    const useCase = new FetchExercisesUseCase(exercisesListsPrismaRepository)

    return useCase
}