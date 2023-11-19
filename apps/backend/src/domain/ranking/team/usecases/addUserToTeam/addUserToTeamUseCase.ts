import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Team } from "../../../@entities/team"
import { TeamsRepository } from "../../repositories/teamInterfaceRepository"
import { FindTeamByNameUseCase } from "../findIslandByName/findIslandByNameUseCase"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindUserByIdUseCase } from "@/domain/users/usecases/source/find-user-by-id"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { User } from "@/domain/users/entities/user"

interface AddUserToTeamUseCaseRequest {
    userId: string
    teamName: string
}

type AddUserToTeamUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { users: User[] }
>

export class AddUserToTeamUseCase {

    constructor(private teamsRepository: TeamsRepository,
                private usersRepository: UsersRepository) { }

    async execute({ teamName, userId }: AddUserToTeamUseCaseRequest): Promise<AddUserToTeamUseCaseResponse> {

        const findTeamByNameUseCase = new FindTeamByNameUseCase(this.teamsRepository)
        const possibleTeam = await findTeamByNameUseCase.execute({ name: teamName })
        if (possibleTeam.isLeft())
            return left({ error: new ResourceNotFoundError(`Team '${teamName}'`) })

        const findUserUseCase = new FindUserByIdUseCase(this.usersRepository)
        const user = await findUserUseCase.execute({ id: userId })
        if (user.isLeft())
            return left({ error: new ResourceNotFoundError(`User '${userId}'`) })

        const currentUsers = await this.teamsRepository.fetchUsers(possibleTeam.value.team.id.toString())
        const userAlreadyInTeam = currentUsers.find(user => user.id.toString() === userId)
        if (userAlreadyInTeam)
            return left({ error: new ResourceAlreadyExistsError(`User '${userId}' in team '${teamName}'`) })
            
        const users = await this.teamsRepository.addUser(userId, teamName)

        return right({ users })
    }
}