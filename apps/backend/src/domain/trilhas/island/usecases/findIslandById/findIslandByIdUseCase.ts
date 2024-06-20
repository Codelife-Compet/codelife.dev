import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Island } from "@/domain/trilhas/@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

interface FindIslandByIdUseCaseRequest {
    id: string
}

type FindIslandByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { island: Island }
>

export class FindIslandByIdUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ id }: FindIslandByIdUseCaseRequest): Promise<FindIslandByIdUseCaseResponse> {

        const island = await this.islandsRepository.findById(id)
        if (!island)
            return left({ error: new ResourceNotFoundError(`Island ${id}`) })

        return right({ island })
    }
}