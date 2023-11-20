import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { TeamsPrismaRepository } from "../../repositories/teamPrismaRepository"
import { RemoveUserFromTeamUseCase } from "./removeUserFromTeamUseCase"

export function makeRemoveUserFromTeamUseCase() {
    const teamsRepository = new TeamsPrismaRepository()
    const usersRepository = new PrismaUsersRepository()
    const useCase = new RemoveUserFromTeamUseCase(teamsRepository, usersRepository)

    return useCase
}