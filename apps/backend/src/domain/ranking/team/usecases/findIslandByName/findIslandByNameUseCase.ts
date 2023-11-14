import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Team } from "@/domain/ranking/@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"

interface FindTeamByNameUseCaseRequest {
    name: string
}

type FindTeamByNameUseCaseResponse = Either<
    ResourceNotFoundError,
    { team: Team }
>

export class FindTeamByNameUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ name }: FindTeamByNameUseCaseRequest): Promise<FindTeamByNameUseCaseResponse> {

        const team = await this.teamsRepository.findByName(name)

        if (!team)
            return left(new ResourceNotFoundError("User"))

        return right({ team })
    }
}