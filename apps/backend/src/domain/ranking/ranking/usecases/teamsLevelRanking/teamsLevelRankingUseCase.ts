import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { PonctuationProps } from "@/domain/trilhas/@entities/ponctuation"
import { ListUserUseCase } from "@/domain/users/usecases/source/list-users"

type TeamsLevelRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    {
        teamsPonctuation: {
            teamsName: string;
            score: number;
        }[]
    }
>

interface TeamsLevelRankingUseCaseRequest {
    teamsName: string
    levelId: string
}

export class TeamsLevelRankingUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ levelId, teamsName }: TeamsLevelRankingUseCaseRequest): Promise<TeamsLevelRankingUseCaseResponse> {

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
                    teamsName
                }
            })
            .sort((a, b) => b.score - a.score)

        const ponctuationPerTeams: { teamsName: string, score: number }[] = []

        for (const user of usersPonctuation) {

            const userData = await this.usersRepository.findByName(user.userName)

            const index = ponctuationPerTeams.findIndex(teams => teams.teamsName === userData?.team?.name)
            if (index === -1) {
                ponctuationPerTeams.push({ teamsName: userData?.team?.name as string, score: user.score })
            } else {
                ponctuationPerTeams[index].score += user.score
            }
        }

        const teamsPonctuation = ponctuationPerTeams.filter(teams => teams.teamsName === teamsName)

        return right({ teamsPonctuation })
    }
}