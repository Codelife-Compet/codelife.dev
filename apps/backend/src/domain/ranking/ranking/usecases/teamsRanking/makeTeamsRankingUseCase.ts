import { TeamsRankingUseCase } from "./teamsRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeTeamsRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new TeamsRankingUseCase(usersRepository)

    return useCase
}