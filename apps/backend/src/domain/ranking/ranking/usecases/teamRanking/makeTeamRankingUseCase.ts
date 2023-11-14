import { TeamRankingUseCase } from "./teamRankingUseCase"
import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"

export function makeTeamRankingUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new TeamRankingUseCase(usersRepository)

    return useCase
}