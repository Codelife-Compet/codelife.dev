import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { LoginUserLinkedinUseCase } from "../source/login-user-linkedin"

export function makeLoginUserLinkedinUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new LoginUserLinkedinUseCase(usersRepository)

    return useCase
}