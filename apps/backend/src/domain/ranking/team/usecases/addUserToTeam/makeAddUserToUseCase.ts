import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { TeamsPrismaRepository } from "../../repositories/teamPrismaRepository"
import { AddUserToTeamUseCase } from "./addUserToTeamUseCase"

export function makeAddUserToTeamUseCase() {
    const teamsRepository = new TeamsPrismaRepository()
    const usersRepository = new PrismaUsersRepository()
    const useCase = new AddUserToTeamUseCase(teamsRepository, usersRepository)

    return useCase
}