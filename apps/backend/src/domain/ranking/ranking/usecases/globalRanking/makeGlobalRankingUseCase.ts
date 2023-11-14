import { GlobalRankingUseCase } from "./globalRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeGlobalRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new GlobalRankingUseCase(usersRepository)

    return useCase
}