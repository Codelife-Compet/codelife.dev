import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Team } from "@/domain/ranking/@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"

interface FindTeamByIdUseCaseRequest {
    teamId: string
}

type FindTeamByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError},
    { team: Team }
>

export class FindTeamByIdUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ teamId }: FindTeamByIdUseCaseRequest): Promise<FindTeamByIdUseCaseResponse> {

        const team = await this.teamsRepository.findById(teamId)

        if (!team)
            return left({ error: new ResourceNotFoundError(`Team ${teamId}`)})

        return right({ team })
    }
}