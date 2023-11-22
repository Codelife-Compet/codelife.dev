import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { PonctuationProps } from "@/domain/trilhas/@entities/ponctuation"
import { ListUserUseCase } from "@/domain/users/usecases/source/list-users"

type TeamRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { teamsPonctuation: PonctuationProps[] }
>

interface TeamRankingUseCaseRequest {
    teamId: string
}

export class TeamRankingUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ teamId }: TeamRankingUseCaseRequest): Promise<TeamRankingUseCaseResponse> {
        
        const listUsersUseCase = new ListUserUseCase(this.usersRepository)
        const listUsers = await listUsersUseCase.execute()
        if (listUsers.isLeft())
            return left({ error: listUsers.value })

        const { users } = listUsers.value

        const teamsPonctuation: PonctuationProps[] = users
            .filter(user => user.teamId === teamId)
            .map(user => {
                return {
                    levelId: "",
                    score: user.score,
                    userName: user.name || "Unnamed"
                }
            })
            .sort((a, b) => b.score - a.score)

        return right({ teamsPonctuation })
    }
}