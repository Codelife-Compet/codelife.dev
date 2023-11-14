import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Trail } from "../../../@entities/trail"
import { TrailsRepository } from "../../repositories/trailInterfaceRepository"
import { Island } from "@/domain/trilhas/@entities/island"
import { FindTrailByNameUseCase } from "../findTrailByName/findTrailByNameUseCase"

interface CreateTrailUseCaseRequest {
    name: string
    description: string
    theme: string
    islands?: Island[]
}

type CreateTrailUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { trail: Trail }
>

export class CreateTrailUseCase {

    constructor(private trailsRepository: TrailsRepository) { }

    async execute({ description, name, theme, islands }: CreateTrailUseCaseRequest): Promise<CreateTrailUseCaseResponse> {

        const findTrailByNameUseCase = new FindTrailByNameUseCase(this.trailsRepository)

        const possibleTrail = await findTrailByNameUseCase.execute({ name })

        if (possibleTrail.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Trail's ${name} trail`) })
        }

        const trail = await this.trailsRepository.create({ description, islands, name, theme })

        return right({ trail })
    }
}