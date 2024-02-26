import { RemoveExerciseStatusUseCase } from "./removeExerciseStatusUseCase"
import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { ExerciseStatusPrismaRepository } from "@/domain/listasExercicios/exerciseStatus/repositories/exerciseStatusPrismaRepository"

export function makeRemoveExerciseStatus() {
    const exercisesPrismaRepository = new ExercisesPrismaRepository()
    const exerciseStatusPrismaRepository = new ExerciseStatusPrismaRepository()
    const useCase = new RemoveExerciseStatusUseCase(exercisesPrismaRepository, exerciseStatusPrismaRepository)

    return useCase
}