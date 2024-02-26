import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"
import { FindExercisesListByIdUseCase } from "./findExerciseListByIdUseCase"

export function makeFindExercisesListByIdUseCase() {
    const exerciselistsRepository = new ExercisesListsPrismaRepository()
    const useCase = new FindExercisesListByIdUseCase(exerciselistsRepository)

    return useCase
}