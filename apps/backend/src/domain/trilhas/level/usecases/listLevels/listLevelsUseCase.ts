import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Level } from "../../../@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"

type ListLevelsUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { levels: Level[] }
>

export class ListLevelsUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute(): Promise<ListLevelsUseCaseResponse> {

        const levels = await this.levelsRepository.list();

        return right({ levels })
    }
}