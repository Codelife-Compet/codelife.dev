import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { ListUserUseCase } from "@/domain/users/usecases/source/list-users"
import { TeamsRepository } from "@/domain/ranking/team/repositories/teamInterfaceRepository"

type TeamsRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    {
        ponctuationPerTeamName: {
            teamName: string;
            score: number;
        }[]
    }
>

export class TeamsRankingUseCase {

    constructor(private usersRepository: UsersRepository, private teamsRepository: TeamsRepository) { }

    async execute(): Promise<TeamsRankingUseCaseResponse> {

        const listUsersUseCase = new ListUserUseCase(this.usersRepository)
        const listUsers = await listUsersUseCase.execute()
        if (listUsers.isLeft())
            return left({ error: listUsers.value })

        const { users } = listUsers.value

        const ponctuationPerTeamId: { teamId: string, score: number }[] = []

        for (const user of users) {

            const userData = await this.usersRepository.findByName(user.name as string)
            if (userData && userData.teamId) {
                const index = ponctuationPerTeamId.findIndex(team => team.teamId === userData.teamId)
                if (index === -1) {
                    ponctuationPerTeamId.push({ teamId: userData.teamId as string, score: user.score })
                } else {
                    ponctuationPerTeamId[index].score += user.score
                }
            }
        }

        const ponctuationPerTeamName: { teamName: string; score: number; }[] =
            await Promise.all(ponctuationPerTeamId
                .map(async team => {
                    const teamData = await this.teamsRepository.findById(team.teamId)
                    if (teamData?.name)
                        return { teamName: teamData.name, score: team.score }

                    return { teamName: "", score: 0 }
                }))

        ponctuationPerTeamName.sort((a, b) => b.score - a.score)

        return right({ ponctuationPerTeamName })
    }
}
