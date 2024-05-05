import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Island } from "@/domain/trilhas/@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

interface DeleteIslandUseCaseRequest {
    id: string
}

type DeleteIslandUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { island: Island }
>

export class DeleteIslandUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ id }: DeleteIslandUseCaseRequest): Promise<DeleteIslandUseCaseResponse> {

        const island = await this.islandsRepository.delete(id)
        if (!island)
            return left({ error: new ResourceNotFoundError(`Island ${id}`) })

        return right({ island })
    }
}