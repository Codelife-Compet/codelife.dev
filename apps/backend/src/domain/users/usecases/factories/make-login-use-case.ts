import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { LoginUserUseCase } from "../source/login-user"

export function makeLoginUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new LoginUserUseCase(usersRepository)

    return useCase
}