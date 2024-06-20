import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Ponctuation } from "../../../@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"
import { FindPonctuationByNameUseCase } from "../findPonctuationByUserName&LevelId/findPonctuationByNameUseCase"

interface CreatePonctuationUseCaseRequest {
    score: number
    userName: string
    levelId: string
}

type CreatePonctuationUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { ponctuation: Ponctuation }
>

export class CreatePonctuationUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ levelId, score, userName }: CreatePonctuationUseCaseRequest): Promise<CreatePonctuationUseCaseResponse> {

        const findPonctuationByUserNameUseCase = new FindPonctuationByNameUseCase(this.ponctuationsRepository)

        const possiblePonctuation = await findPonctuationByUserNameUseCase.execute({ levelId, userName })

        if (possiblePonctuation.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Level's ${name} ponctuation`) })
        }

        const ponctuation = await this.ponctuationsRepository.create({ levelId, score, userName })

        return right({ ponctuation })
    }
}