import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Trail } from "../../../@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"
import { Island } from "@/domain/trilhas/@entities/island"
import { FindTrailByNameUseCase } from "../findTrailByName/findTrailByNameUseCase"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface UpdateTrailUseCaseRequest {
    id: string
    name?: string
    description?: string
    theme?: string
}

type UpdateTrailUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { trail: Trail }
>

export class UpdateTrailUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute({ description, name, theme, id }: UpdateTrailUseCaseRequest): Promise<UpdateTrailUseCaseResponse> {

        const trail = await this.trailsRepository.update(id, { description, name, theme })

        if (!trail)
            return left({ error: new ResourceNotFoundError(`Trail ${id}`) })

        return right({ trail })
    }
}