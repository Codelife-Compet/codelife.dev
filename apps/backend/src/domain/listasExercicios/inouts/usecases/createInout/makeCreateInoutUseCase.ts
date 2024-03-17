import { InoutPrismaRepository } from "../../repositories/inoutPrismaRepository"
import { CreateInoutUseCase } from "./createInoutUseCase"

export function makeCreateInoutUseCase() {
    const languageexerciseslistsRepository = new InoutPrismaRepository()
    const useCase = new CreateInoutUseCase(languageexerciseslistsRepository)

    return useCase
}