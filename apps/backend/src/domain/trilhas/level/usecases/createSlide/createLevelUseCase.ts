import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Level } from "../../../@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"
import { FindLevelByLevelName_IslandId } from "../findSlideBySlideName&LevelId/findLevelByLevelName&IslandIdUseCase"

interface CreateLevelUseCaseRequest {
    name: string
    description: string
    theme: string
    islandId: string
}

type CreateLevelUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { level: Level }
>

export class CreateLevelUseCase {

    constructor(private levelsRepository: LevelsRepository) { }

    async execute({ description, islandId, name, theme, }: CreateLevelUseCaseRequest): Promise<CreateLevelUseCaseResponse> {

        const findLevelByUserNameUseCase = new FindLevelByLevelName_IslandId(this.levelsRepository)

        const possibleLevel = await findLevelByUserNameUseCase.execute({ islandId, levelName: name })

        if (possibleLevel.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Island's ${name} level`) })
        }

        const level = await this.levelsRepository.create({ description, islandId, name, theme, ponctuations: [] })

        return right({ level })
    }
}