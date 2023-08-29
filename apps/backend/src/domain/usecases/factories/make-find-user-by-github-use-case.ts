import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { FindUserByGithubTokenUseCase } from "../source/find-user-by-github"

export function makeFindUserByGithubTokenUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new FindUserByGithubTokenUseCase(usersRepository)

    return useCase
}