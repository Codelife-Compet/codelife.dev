import { LevelsPrismaRepository } from "../../repositories/levelPrismaRepository"
import { CreateLevelUseCase } from "./createLevelUseCase"

export function makeCreateLevelUseCase() {
    const levelsRepository = new LevelsPrismaRepository()
    const useCase = new CreateLevelUseCase(levelsRepository)

    return useCase
}