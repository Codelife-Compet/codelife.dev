import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { CreateUserUseCase } from "../source/create-user-use-case"

export function makeCreateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new CreateUserUseCase(usersRepository)

    return useCase
}