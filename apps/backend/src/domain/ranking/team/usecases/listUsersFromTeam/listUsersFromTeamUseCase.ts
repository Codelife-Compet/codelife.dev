import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { User } from "@/domain/users/entities/user"

interface ListUsersFromTeamUseCaseRequest {
    teamId: string
}

type ListUsersFromTeamUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { teams: User[] }
>

export class ListUsersFromTeamUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ teamId } : ListUsersFromTeamUseCaseRequest): Promise<ListUsersFromTeamUseCaseResponse> {

        const teams = await this.teamsRepository.listMembersByTeam(teamId);

        return right({ teams })
    }
}