import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Ponctuation } from "../../../@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"
import { FindPonctuationByPonctuationName_LevelId } from "../findPonctuationByUserName&LevelId/findLevelByLevelName&findPonctuationByPonctuationName&LevelIdUseCase"

interface CreatePonctuationUseCaseRequest {
    userName: string
    score: number
    levelId: string
}

type CreatePonctuationUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { ponctuation: Ponctuation }
>

export class CreatePonctuationUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ levelId, score, userName }: CreatePonctuationUseCaseRequest): Promise<CreatePonctuationUseCaseResponse> {

        const findPonctuationByUserNameUseCase = new FindPonctuationByPonctuationName_LevelId(this.ponctuationsRepository)

        const possiblePonctuation = await findPonctuationByUserNameUseCase.execute({ levelId, userName })

        if (possiblePonctuation.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Level's ${name} ponctuation`) })
        }

        const ponctuation = await this.ponctuationsRepository.create({ levelId, score, userName })

        return right({ ponctuation })
    }
}