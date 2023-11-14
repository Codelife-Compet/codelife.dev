import { PonctuationsPrismaRepository } from "../../repositories/ponctuationPrismaRepository"
import { CreatePonctuationUseCase } from "./createPonctuationUseCase"

export function makeCreatePonctuationUseCase() {
    const ponctuationsRepository = new PonctuationsPrismaRepository()
    const useCase = new CreatePonctuationUseCase(ponctuationsRepository)

    return useCase
}