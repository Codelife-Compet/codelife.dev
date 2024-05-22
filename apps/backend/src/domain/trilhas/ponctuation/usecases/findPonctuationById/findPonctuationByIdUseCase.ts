import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Ponctuation } from "@/domain/trilhas/@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

interface FindPonctuationByIdRequest {
    id: string
}

type FindPonctuationByIdResponse = Either<
    { error: ResourceNotFoundError },
    { ponctuation: Ponctuation }
>

export class FindPonctuationByIdUseCase {

    constructor(private ponctuationsRepository: PonctuationsRepository) { }

    async execute({ id }: FindPonctuationByIdRequest): Promise<FindPonctuationByIdResponse> {

        const ponctuation = await this.ponctuationsRepository.findById(id)

        if (!ponctuation)
            return left({ error: new ResourceNotFoundError(`Ponctuation ${id}`) })

        return right({ ponctuation })
    }
}