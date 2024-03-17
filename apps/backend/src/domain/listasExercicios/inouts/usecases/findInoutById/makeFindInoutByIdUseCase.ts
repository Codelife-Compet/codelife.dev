import { FindInoutByIdUseCase } from "./findIsInoutByIdUseCase"
import { InoutPrismaRepository } from "../../repositories/inoutPrismaRepository"

export function makeFindInoutByIdUseCase() {
    const inoutPrismaRepository = new InoutPrismaRepository()
    const useCase = new FindInoutByIdUseCase(inoutPrismaRepository)

    return useCase
}