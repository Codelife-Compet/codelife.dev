import { InoutPrismaRepository } from "../../repositories/inoutPrismaRepository"
import { updateInoutUseCase } from "./updateInoutUseCase"

export function makeUpdateInoutUseCase() {
    const inoutPrismaRepository = new InoutPrismaRepository()
    const useCase = new updateInoutUseCase(inoutPrismaRepository)

    return useCase
}