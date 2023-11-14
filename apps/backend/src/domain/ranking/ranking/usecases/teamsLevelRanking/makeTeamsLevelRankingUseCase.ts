import { TeamsLevelRankingUseCase } from "./teamsLevelRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeTeamsLevelRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new TeamsLevelRankingUseCase(usersRepository)

    return useCase
}