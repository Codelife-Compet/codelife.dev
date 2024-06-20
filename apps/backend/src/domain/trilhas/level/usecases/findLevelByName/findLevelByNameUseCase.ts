import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Level } from "@/domain/trilhas/@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"

interface FindLevelByNameRequest {
    levelName: string,
    islandId: string
}

type FindLevelByNameResponse = Either<
    { error: ResourceNotFoundError },
    { level: Level }
>

export class FindLevelByNameUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ islandId, levelName }: FindLevelByNameRequest): Promise<FindLevelByNameResponse> {

        const level = await this.levelsRepository.findByLevelNameIslandId(levelName, islandId)

        if (!level)
            return left({ error: new ResourceNotFoundError(`Level ${levelName} in island ${islandId}`) })

        return right({ level })
    }
}