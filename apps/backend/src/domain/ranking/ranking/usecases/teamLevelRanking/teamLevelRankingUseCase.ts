import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { PonctuationProps } from "@/domain/trilhas/@entities/ponctuation"
import { ListUserUseCase } from "@/domain/users/usecases/source/list-users"

type TeamLevelRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { usersPonctuation: PonctuationProps[] }
>

interface TeamLevelRankingUseCaseRequest {
    teamName: string
    levelId: string
}

export class TeamLevelRankingUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ levelId, teamName }: TeamLevelRankingUseCaseRequest): Promise<TeamLevelRankingUseCaseResponse> {

        const listUsersUseCase = new ListUserUseCase(this.usersRepository)
        const listUsers = await listUsersUseCase.execute()
        if (listUsers.isLeft())
            return left({ error: listUsers.value })

        const { users } = listUsers.value
        const usersPonctuation: PonctuationProps[] = users.
            map(user => {

                return {
                    levelId,
                    score: user.score,
                    userName: user.name || "Unnamed",
                    teamName
                }
            })
            .sort((a, b) => b.score - a.score)


        return right({ usersPonctuation })
    }
}