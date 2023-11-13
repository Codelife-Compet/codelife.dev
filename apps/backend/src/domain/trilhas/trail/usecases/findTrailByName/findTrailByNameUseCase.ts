import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Trail } from "@/domain/trilhas/@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"

interface FindTrailByNameUseCaseRequest {
    name: string
}

type FindTrailByNameUseCaseResponse = Either<
    ResourceNotFoundError,
    { trail: Trail }
>

export class FindTrailByNameUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute({ name }: FindTrailByNameUseCaseRequest): Promise<FindTrailByNameUseCaseResponse> {

        const trail = await this.trailsRepository.findByName(name)

        if (!trail)
            return left(new ResourceNotFoundError("Trail"))

        return right({ trail })
    }
}