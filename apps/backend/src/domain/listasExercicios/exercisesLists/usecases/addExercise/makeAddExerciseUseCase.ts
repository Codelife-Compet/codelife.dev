import { ExercisesPrismaRepository } from "@/domain/listasExercicios/exercises/repositories/exercisesPrismaRepository"
import { ExercisesListsPrismaRepository } from "../../repositories/exercisesListsPrismaRepository"
import { AddExerciseUseCase } from "./addExerciseUseCase"

export function makeAddExerciseUseCase() {
    const exercisePrismaRepository = new ExercisesPrismaRepository()
    const exercisesListPrismaRpositpry = new ExercisesListsPrismaRepository()
    const useCase = new AddExerciseUseCase(exercisesListPrismaRpositpry, exercisePrismaRepository,)

    return useCase
}