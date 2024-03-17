import { InoutPrismaRepository } from "../../repositories/inoutPrismaRepository"
import { DeleteInoutUseCase } from "./deleteInoutUseCase"

export function makeDeleteInoutUseCase() {
    const inoutPrismaRepository = new InoutPrismaRepository()
    const useCase = new DeleteInoutUseCase(inoutPrismaRepository)

    return useCase
}