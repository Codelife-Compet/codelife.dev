import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { CreateUserUseCase } from "../source/create-user"

export function makeCreateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new CreateUserUseCase(usersRepository)

    return useCase
}