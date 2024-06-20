import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Level } from "@/domain/trilhas/@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"

interface FindLevelByIdRequest {
    id: string
}

type FindLevelByIdResponse = Either<
    { error: ResourceNotFoundError },
    { level: Level }
>

export class FindLevelByIdUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ id }: FindLevelByIdRequest): Promise<FindLevelByIdResponse> {

        const level = await this.levelsRepository.findById(id)

        if (!level)
            return left({ error: new ResourceNotFoundError(`Level ${id}`) })

        return right({ level })
    }
}