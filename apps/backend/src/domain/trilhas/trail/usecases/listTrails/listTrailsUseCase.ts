import { Either, left, right } from "@/core/types/either"
import { Trail } from "../../../@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

type ListTrailsUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { trails: Trail[] }
>

export class ListTrailsUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute(): Promise<ListTrailsUseCaseResponse> {

        const trails = await this.trailsRepository.list()

        if(trails.length === 0)
            return left({ error: new ResourceNotFoundError('Trails not found') })

        return right({ trails })
    }
}