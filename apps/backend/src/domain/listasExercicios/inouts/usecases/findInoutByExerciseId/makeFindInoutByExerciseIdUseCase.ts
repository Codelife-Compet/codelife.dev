import { FindInoutByExerciseIdUseCase } from "./findInoutByExerciseIdUseCase"
import { InoutPrismaRepository } from "../../repositories/inoutPrismaRepository"

export function makeFindInoutByExerciseIdUseCase() {
    const exercisesRepository = new InoutPrismaRepository()
    const useCase = new FindInoutByExerciseIdUseCase(exercisesRepository)

    return useCase
}