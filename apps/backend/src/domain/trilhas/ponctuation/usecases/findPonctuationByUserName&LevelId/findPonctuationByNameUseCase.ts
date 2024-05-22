import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Ponctuation } from "@/domain/trilhas/@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

interface FindPonctuationByNameUseCaseRequest {
    userName: string,
    levelId: string
}

type FindPonctuationByNameUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { ponctuation: Ponctuation }
>

export class FindPonctuationByNameUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ levelId, userName }: FindPonctuationByNameUseCaseRequest): Promise<FindPonctuationByNameUseCaseResponse> {

        const ponctuation = await this.ponctuationsRepository.findPonctuationByUserName_LevelId(userName, levelId)

        if (!ponctuation)
            return left({ error: new ResourceNotFoundError(`Ponctuation of ${userName} in level ${levelId}`) })

        return right({ ponctuation })
    }
}