import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Level } from "../../../@entities/level"
import { LevelsRepository } from "../../repositories/levelInterfaceRepository"
import { FindLevelByNameUseCase } from "../findLevelByName/findLevelByNameUseCase"
import { IslandsRepository } from "@/domain/trilhas/island/repositories/islandInterfaceRepository"
import { FindIslandByIdUseCase } from "@/domain/trilhas/island/usecases/findIslandById/findIslandByIdUseCase"

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

    constructor(private levelsRepository: LevelsRepository, private islandsRepository: IslandsRepository) { }

    async execute({ description, islandId, name, theme }: CreateLevelUseCaseRequest): Promise<CreateLevelUseCaseResponse> {

        const findLevelByUserNameUseCase = new FindLevelByNameUseCase(this.levelsRepository)
        const possibleLevel = await findLevelByUserNameUseCase.execute({ islandId, levelName: name })
        if (possibleLevel.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Island ${islandId} level ${name}`) })

        const findIslandByIdUseCase = new FindIslandByIdUseCase(this.islandsRepository)
        const possibleIsland = await findIslandByIdUseCase.execute({ id: islandId })
        if (possibleIsland.isLeft())
            return left({ error: possibleIsland.value.error })

        const index = await this.levelsRepository.countLevelsInIsland(islandId)

        const level = await this.levelsRepository.create({ description, islandId, name, theme, index })

        return right({ level })
    }
}