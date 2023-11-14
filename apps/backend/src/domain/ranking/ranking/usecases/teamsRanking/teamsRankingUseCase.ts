import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { GlobalRankingUseCase } from "../globalRanking/globalRankingUseCase"

type TeamsRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    {
        ponctuationPerTeam: {
            teamName: string;
            score: number;
        }[]
    }
>

export class TeamsRankingUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute(): Promise<TeamsRankingUseCaseResponse> {

        const globalRankingUseCase = new GlobalRankingUseCase(this.usersRepository)
        const globalRanking = await globalRankingUseCase.execute()
        if (globalRanking.isLeft())
            return left({ error: globalRanking.value.error })

        const { usersPonctuation } = globalRanking.value

        const ponctuationPerTeam: { teamName: string, score: number }[] = []

        for (const user of usersPonctuation) {

            const userData = await this.usersRepository.findByName(user.userName)

            const index = ponctuationPerTeam.findIndex(team => team.teamName === userData?.team?.name)
            if (index === -1) {
                ponctuationPerTeam.push({ teamName: userData?.team?.name as string, score: user.score })
            } else {
                ponctuationPerTeam[index].score += user.score
            }
        }

        return right({ ponctuationPerTeam })
    }
}
