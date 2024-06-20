import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"
import { Level } from "@/domain/trilhas/@entities/level"

interface ListIslandLevelsUseCaseRequest {
    id: string
}

type ListIslandLevelsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { levels: Level[] }
>

export class ListIslandLevelsUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ id } : ListIslandLevelsUseCaseRequest): Promise<ListIslandLevelsUseCaseResponse> {

        const levels = await this.levelsRepository.listByIslandId(id);

        return right({ levels })
    }
}