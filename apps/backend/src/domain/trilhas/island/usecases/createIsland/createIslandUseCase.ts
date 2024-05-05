import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Island } from "../../../@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"
import { FindIslandByNameUseCase } from "../findIslandByName/findIslandByNameUseCase"
import { Level } from "@/domain/trilhas/@entities/level"

interface CreateIslandUseCaseRequest {
    name: string
    description: string
    theme: string
    levels?: Level[]
    trailId: string
}

type CreateIslandUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { island: Island }
>

export class CreateIslandUseCase {

    constructor(private islandsRepository: IslandsRepository) { }

    async execute({ description, name, theme, levels, trailId }: CreateIslandUseCaseRequest): Promise<CreateIslandUseCaseResponse> {

        const findIslandByNameUseCase = new FindIslandByNameUseCase(this.islandsRepository)

        const possibleIsland = await findIslandByNameUseCase.execute({ name })

        if (possibleIsland.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Trails's ${trailId} island ${name}`) })
        }

        const island = await this.islandsRepository.create({ description, levels, name, theme, trailId })

        return right({ island })
    }
}