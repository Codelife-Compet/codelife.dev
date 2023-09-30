import { UserCodesPrismaRepository } from "../../repositories/userCodesPrismaRepository"
import { CreateUserCodeUseCase } from "./createUserCodeUseCase"

export function makeCreateUserCodeUseCase() {
    const userCodesRepository = new UserCodesPrismaRepository()
    const useCase = new CreateUserCodeUseCase(userCodesRepository)

    return useCase
}