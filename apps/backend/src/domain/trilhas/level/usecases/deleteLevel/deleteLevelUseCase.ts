import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Level } from "@/domain/trilhas/@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"

interface DeleteLevelUseCaseRequest {
    id: string
}

type DeleteLevelUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { level: Level }
>

export class DeleteLevelUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ id }: DeleteLevelUseCaseRequest): Promise<DeleteLevelUseCaseResponse> {

        const level = await this.levelsRepository.delete(id)
        if (!level)
            return left({ error: new ResourceNotFoundError(`Level ${id}`) })

        return right({ level })
    }
}