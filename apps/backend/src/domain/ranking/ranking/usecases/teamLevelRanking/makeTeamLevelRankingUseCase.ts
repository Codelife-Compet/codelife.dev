import { TeamLevelRankingUseCase } from "./teamLevelRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeTeamLevelRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new TeamLevelRankingUseCase(usersRepository)

    return useCase
}