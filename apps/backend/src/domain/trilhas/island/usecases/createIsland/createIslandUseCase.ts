import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Island } from "../../../@entities/island"
import { IslandsRepository } from "../../repositories/islandInterfaceRepository"
import { FindIslandByNameUseCase } from "../findIslandByName/findIslandByNameUseCase"
import { Level } from "@/domain/trilhas/@entities/level"
import { FindTrailByIdUseCase } from "@/domain/trilhas/trail/usecases/findTrailById/findTrailByIdUseCase"
import { TrailsRepository } from "@/domain/trilhas/trail/repositories/trailInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

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

    constructor(private islandsRepository: IslandsRepository, private trailsRepository: TrailsRepository) { }

    async execute({ description, name, theme, levels, trailId }: CreateIslandUseCaseRequest): Promise<CreateIslandUseCaseResponse> {

        const findIslandByNameUseCase = new FindIslandByNameUseCase(this.islandsRepository)

        const possibleIsland = await findIslandByNameUseCase.execute({ islandName: name, trailId })

        if (possibleIsland.isRight()) 
            return left({ error: new ResourceAlreadyExistsError(`Trails's ${trailId} island ${name}`) })

        const findTrailByIdUseCase = new FindTrailByIdUseCase(this.trailsRepository)

        const possibleTrail = await findTrailByIdUseCase.execute({ id: trailId })

        if (possibleTrail.isLeft()) {
            return left({ error: new ResourceNotFoundError(`Trail ${trailId}`) })
        }

        const currentIslands = await this.islandsRepository.listByTrailId(trailId)
        const nextIndex = currentIslands.length + 1 

        const island = await this.islandsRepository.create({ description, levels, name, theme, trailId, index: nextIndex })

        return right({ island })
    }
}