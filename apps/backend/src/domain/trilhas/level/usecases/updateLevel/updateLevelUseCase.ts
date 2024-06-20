import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Level } from "@/domain/trilhas/@entities/level"

interface UpdateLevelUseCaseRequest {
    id: string
    name?: string
    description?: string
    theme?: string
}

type UpdateLevelUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { level: Level }
>

export class UpdateLevelUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ description, name, theme, id }: UpdateLevelUseCaseRequest): Promise<UpdateLevelUseCaseResponse> {

        const level = await this.levelsRepository.update(id, { description, name, theme })

        if (!level)
            return left({ error: new ResourceNotFoundError(`Level ${id}`) })

        return right({ level })
    }
}