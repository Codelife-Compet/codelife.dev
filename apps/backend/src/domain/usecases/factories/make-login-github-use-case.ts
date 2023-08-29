import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { LoginUserGithubUseCase } from "../source/login-user-github"

export function makeLoginUserGithubUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new LoginUserGithubUseCase(usersRepository)

    return useCase
}