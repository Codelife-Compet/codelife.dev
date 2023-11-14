import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Team } from "../../../@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { FindTeamByNameUseCase } from "../findIslandByName/findIslandByNameUseCase"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface AddUserToTeamUseCaseRequest {
    userId: string
    teamName: string
}

type AddUserToTeamUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { team: Team }
>

export class AddUserToTeamUseCase {

    constructor(private teamsRepository: TeamsRepository) { }

    async execute({ teamName, userId }: AddUserToTeamUseCaseRequest): Promise<AddUserToTeamUseCaseResponse> {

        const findTeamByNameUseCase = new FindTeamByNameUseCase(this.teamsRepository)

        const possibleTeam = await findTeamByNameUseCase.execute({ name: teamName })

        if (possibleTeam.isLeft()) {
            return left({ error: new ResourceNotFoundError(`Team '${teamName}'`) })
        }

        const team = await this.teamsRepository.addUser(teamName, userId)

        return right({ team })
    }
}