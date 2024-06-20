import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Team } from "@/domain/ranking/@entities/team"

interface UpdateTeamUseCaseRequest {
    id: string
    name?: string
    institutionName?: string
    institutinPicture?: string
}

type UpdateTeamUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { team: Team }
>

export class UpdateTeamUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ id, ...data }: UpdateTeamUseCaseRequest): Promise<UpdateTeamUseCaseResponse> {

        const team = await this.teamsRepository.update(id, data)

        if (!team)
            return left({ error: new ResourceNotFoundError(`Team ${id}`) })

        return right({ team })
    }
}