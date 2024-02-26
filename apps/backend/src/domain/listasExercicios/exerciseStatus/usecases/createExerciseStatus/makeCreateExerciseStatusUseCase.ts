import { ExerciseStatusPrismaRepository } from "../../repositories/exerciseStatusPrismaRepository"
import { CreateExerciseStatusUseCase } from "./createExerciseStatusUseCase"

export function makeCreateExerciseStatusUseCase() {
    const languageexerciseslistsRepository = new ExerciseStatusPrismaRepository()
    const useCase = new CreateExerciseStatusUseCase(languageexerciseslistsRepository)

    return useCase
}