import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { PonctuationProps } from "@/domain/trilhas/@entities/ponctuation"
import { GlobalRankingUseCase } from "../globalRanking/globalRankingUseCase"

type TeamRankingUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { teamsPonctuation: PonctuationProps[] }
>

interface TeamRankingUseCaseRequest {
    teamName: string
}

export class TeamRankingUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ teamName }: TeamRankingUseCaseRequest): Promise<TeamRankingUseCaseResponse> {

        const globalRankingUseCase = new GlobalRankingUseCase(this.usersRepository)
        const globalRanking = await globalRankingUseCase.execute()
        if (globalRanking.isLeft())
            return left({ error: globalRanking.value.error })

        const { usersPonctuation } = globalRanking.value

        const teamsPonctuation = usersPonctuation.filter(user => user.userName === teamName)
        
        return right({ teamsPonctuation })
    }
}