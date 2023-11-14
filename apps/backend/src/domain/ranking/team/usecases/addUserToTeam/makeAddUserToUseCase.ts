import { TeamsPrismaRepository } from "../../repositories/teamPrismaRepository"
import { AddUserToTeamUseCase } from "./addUserToTeamUseCase"

export function makeAddUserToTeamUseCase() {
    const teamsRepository = new TeamsPrismaRepository()
    const useCase = new AddUserToTeamUseCase(teamsRepository)

    return useCase
}