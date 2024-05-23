import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Ponctuation } from "@/domain/trilhas/@entities/ponctuation"
import { PonctuationsRepository } from "../../repositories/ponctuationInterfaceRepository"

interface ListLevelPonctuationsUseCaseRequest {
    id: string
}

type ListLevelPonctuationsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { ponctuations: Ponctuation[] }
>

export class ListLevelPonctuationsUseCase {

    constructor(private levelsRepository: PonctuationsRepository) { }

    async execute({ id } : ListLevelPonctuationsUseCaseRequest): Promise<ListLevelPonctuationsUseCaseResponse> {

        const ponctuations = await this.levelsRepository.listByLevelId(id);

        return right({ ponctuations })
    }
}