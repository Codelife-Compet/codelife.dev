import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"
import { FindExercisesListByTopicUseCase } from "./findExerciseListByTopicUseCase"

export function makeFindExerciseListByTopicUseCase() {
    const exerciselistsRepository = new ExercisesListsPrismaRepository()
    const useCase = new FindExercisesListByTopicUseCase(exerciselistsRepository)

    return useCase
}