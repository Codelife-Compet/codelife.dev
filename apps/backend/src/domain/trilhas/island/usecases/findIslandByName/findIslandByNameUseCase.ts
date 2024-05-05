import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Island } from "@/domain/trilhas/@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

interface FindIslandByNameUseCaseRequest {
    islandName: string
    trailId: string
}

type FindIslandByNameUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { island: Island }
>

export class FindIslandByNameUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ islandName, trailId }: FindIslandByNameUseCaseRequest): Promise<FindIslandByNameUseCaseResponse> {

        const island = await this.islandsRepository.findByIslandName_TrailId(islandName, trailId)
        if (!island)
            return left({ error: new ResourceNotFoundError(`Island ${name}`) })

        return right({ island })
    }
}