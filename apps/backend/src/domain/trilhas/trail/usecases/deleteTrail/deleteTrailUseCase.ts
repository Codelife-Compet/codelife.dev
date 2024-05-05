import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Trail } from "@/domain/trilhas/@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"

interface DeleteTrailUseCaseRequest {
    id: string
}

type DeleteTrailUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { trail: Trail }
>

export class DeleteTrailUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute({ id }: DeleteTrailUseCaseRequest): Promise<DeleteTrailUseCaseResponse> {

        const trail = await this.trailsRepository.delete(id)
        if (!trail)
            return left({ error: new ResourceNotFoundError("Trail") })

        return right({ trail })
    }
}