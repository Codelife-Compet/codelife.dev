import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { Team } from "@/domain/ranking/@entities/team"

interface DeleteTeamUseCaseRequest {
    id: string
}

type DeleteTeamUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { team: Team }
>

export class DeleteTeamUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ id }: DeleteTeamUseCaseRequest): Promise<DeleteTeamUseCaseResponse> {

        const team = await this.teamsRepository.delete(id)
        if (!team)
            return left({ error: new ResourceNotFoundError(`Team ${id}`) })

        return right({ team })
    }
}