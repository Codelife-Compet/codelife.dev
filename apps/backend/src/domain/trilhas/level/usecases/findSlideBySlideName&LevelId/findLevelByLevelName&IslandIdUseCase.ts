import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Level } from "@/domain/trilhas/@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"

interface FindLevelByLevelName_IslandIdRequest {
    levelName: string,
    islandId: string
}

type FindLevelByLevelName_IslandIdResponse = Either<
    ResourceNotFoundError,
    { level: Level }
>

export class FindLevelByLevelName_IslandId {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ islandId, levelName }: FindLevelByLevelName_IslandIdRequest): Promise<FindLevelByLevelName_IslandIdResponse> {

        const level = await this.levelsRepository.findLevelByLevelName_IslandId(levelName, islandId)

        if (!level)
            return left(new ResourceNotFoundError("User"))

        return right({ level })
    }
}