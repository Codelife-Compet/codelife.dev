import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Team } from "@/domain/ranking/@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"

interface FindTeamByNameUseCaseRequest {
    teamName: string
}

type FindTeamByNameUseCaseResponse = Either<
    { error: ResourceNotFoundError},
    { team: Team }
>

export class FindTeamByNameUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ teamName }: FindTeamByNameUseCaseRequest): Promise<FindTeamByNameUseCaseResponse> {

        const team = await this.teamsRepository.findByName(teamName)

        if (!team)
            return left({ error: new ResourceNotFoundError(`Team ${teamName}`)})

        return right({ team })
    }
}