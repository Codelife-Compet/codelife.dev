import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Island } from "@/domain/trilhas/@entities/island"

interface UpdateIslandUseCaseRequest {
    id: string
    name?: string
    description?: string
    theme?: string
}

type UpdateIslandUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { island: Island }
>

export class UpdateIslandUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ description, name, theme, id }: UpdateIslandUseCaseRequest): Promise<UpdateIslandUseCaseResponse> {

        const island = await this.islandsRepository.update(id, { description, name, theme })

        if (!island)
            return left({ error: new ResourceNotFoundError(`Island ${id}`) })

        return right({ island })
    }
}