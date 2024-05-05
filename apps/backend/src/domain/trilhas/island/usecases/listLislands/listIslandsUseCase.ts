import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Island } from "../../../@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"

type ListIslandsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { islands: Island[] }
>

export class ListIslandsUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute(): Promise<ListIslandsUseCaseResponse> {

        const islands = await this.islandsRepository.list();

        return right({ islands })
    }
}