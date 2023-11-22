import { TeamsPrismaRepository } from "@/domain/ranking/team/repositories/teamPrismaRepository"
import { TeamsRankingUseCase } from "./teamsRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeTeamsRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const teamsRepository = new TeamsPrismaRepository()
    const useCase = new TeamsRankingUseCase(usersRepository, teamsRepository)

    return useCase
}