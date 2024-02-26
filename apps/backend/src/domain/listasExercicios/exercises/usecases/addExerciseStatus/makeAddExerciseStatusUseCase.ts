import { ExercisesPrismaRepository } from "../../repositories/exercisesPrismaRepository"
import { AddExerciseStatusUseCase } from "./addExerciseStatusUseCase"
import { ExerciseStatusPrismaRepository } from "@/domain/listasExercicios/exerciseStatus/repositories/exerciseStatusPrismaRepository"

export function makeAddExerciseStatusUseCase() {
    const exerciseStatusPrismaRepository = new ExerciseStatusPrismaRepository()
    const exercisesPrismaRepository = new ExercisesPrismaRepository()
    const useCase = new AddExerciseStatusUseCase(exercisesPrismaRepository, exerciseStatusPrismaRepository, )

    return useCase
}