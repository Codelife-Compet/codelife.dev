import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Team } from "../../../@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { FindTeamByNameUseCase } from "../findByName/findTeamByNameUseCase"

interface CreateTeamUseCaseRequest {
    name: string
    institutionName?: string
    institutinPicture?: string
}

type CreateTeamUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { team: Team }
>

export class CreateTeamUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ name, institutinPicture, institutionName }: CreateTeamUseCaseRequest): Promise<CreateTeamUseCaseResponse> {

        const findTeamByNameUseCase = new FindTeamByNameUseCase(this.teamsRepository)

        const possibleTeam = await findTeamByNameUseCase.execute({ name })

        if (possibleTeam.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Team ${name}`) })
        }

        const team = await this.teamsRepository.create({ name, institutinPicture, institutionName, users: [] })

        return right({ team })
    }
}