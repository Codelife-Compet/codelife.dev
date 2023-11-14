import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Island } from "@/domain/trilhas/@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

interface FindIslandByNameUseCaseRequest {
    name: string
}

type FindIslandByNameUseCaseResponse = Either<
    ResourceNotFoundError,
    { island: Island }
>

export class FindIslandByNameUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ name }: FindIslandByNameUseCaseRequest): Promise<FindIslandByNameUseCaseResponse> {

        const island = await this.islandsRepository.findByName(name)

        if (!island)
            return left(new ResourceNotFoundError("User"))

        return right({ island })
    }
}