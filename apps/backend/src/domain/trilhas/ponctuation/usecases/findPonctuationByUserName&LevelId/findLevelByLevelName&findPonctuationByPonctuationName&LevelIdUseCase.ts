import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Ponctuation } from "@/domain/trilhas/@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

interface FindPonctuationByPonctuationName_LevelIdRequest {
    userName: string,
    levelId: string
}

type FindPonctuationByPonctuationName_LevelIdResponse = Either<
    ResourceNotFoundError,
    { ponctuation: Ponctuation }
>

export class FindPonctuationByPonctuationName_LevelId {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ levelId, userName }: FindPonctuationByPonctuationName_LevelIdRequest): Promise<FindPonctuationByPonctuationName_LevelIdResponse> {

        const ponctuation = await this.ponctuationsRepository.findPonctuationByUserName_LevelId(userName, levelId)

        if (!ponctuation)
            return left(new ResourceNotFoundError("User"))

        return right({ ponctuation })
    }
}