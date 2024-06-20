import { TrailsPrismaRepository } from "../../repositories/trailPrismaRepository"
import { CreateTrailUseCase } from "./createTrailUseCase"

export function makeCreateTrailUseCase() {
    const trailsRepository = new TrailsPrismaRepository()
    const useCase = new CreateTrailUseCase(trailsRepository)

    return useCase
}