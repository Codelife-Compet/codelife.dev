import { IslandsPrismaRepository } from "../../repositories/islandPrismaRepository"
import { CreateIslandUseCase } from "./createIslandUseCase"

export function makeCreateIslandUseCase() {
    const islandsRepository = new IslandsPrismaRepository()
    const useCase = new CreateIslandUseCase(islandsRepository)

    return useCase
}