import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Island } from "../../../@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

interface ListTrailIslandsUseCaseRequest {
    id: string
}

type ListTrailIslandsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { islands: Island[] }
>

export class ListTrailIslandsUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ id } : ListTrailIslandsUseCaseRequest): Promise<ListTrailIslandsUseCaseResponse> {

        const islands = await this.islandsRepository.listByTrailId(id);

        return right({ islands })
    }
}