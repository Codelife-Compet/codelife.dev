import { TeamsPrismaRepository } from "../../repositories/teamPrismaRepository"
import { CreateTeamUseCase } from "./createTeamUseCase"

export function makeCreateTeamUseCase() {
    const teamsRepository = new TeamsPrismaRepository()
    const useCase = new CreateTeamUseCase(teamsRepository)

    return useCase
}