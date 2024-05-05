import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Trail } from "@/domain/trilhas/@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"

interface FindTrailByIdUseCaseRequest {
    id: string
}

type FindTrailByIdUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { trail: Trail }
>

export class FindTrailByIdUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute({ id }: FindTrailByIdUseCaseRequest): Promise<FindTrailByIdUseCaseResponse> {

        const trail = await this.trailsRepository.findById(id)

        if (!trail)
            return left({error: new ResourceNotFoundError("Trail")})

        return right({ trail })
    }
}