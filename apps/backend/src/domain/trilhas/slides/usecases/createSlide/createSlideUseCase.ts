import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Slide } from "../../../@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"
import { FindSlideByNameUseCase } from "../findSlideByName/findSlideBySlideName&LevelIdUseCase"
import { FindLevelByIdUseCase } from "@/domain/trilhas/level/usecases/findLevelById/findLevelByIdUseCase"
import { LevelsRepository } from "@/domain/trilhas/level/repositories/levelInterfaceRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface CreateSlideUseCaseRequest {
    name: string
    description: string
    theme: string
    baseCode: string 
    levelId: string
}

type CreateSlideUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError | ResourceNotFoundError },
    { slide: Slide }
>

export class CreateSlideUseCase {

    constructor(private slidesRepository: SlidesRepository, private levelsRepository : LevelsRepository) { }

    async execute({ baseCode, description, levelId, name, theme }: CreateSlideUseCaseRequest): Promise<CreateSlideUseCaseResponse> {

        const findSlideByUserNameUseCase = new FindSlideByNameUseCase(this.slidesRepository)
        const possibleSlide = await findSlideByUserNameUseCase.execute({ levelId, slideName: name })
        if (possibleSlide.isRight())
            return left({ error: new ResourceAlreadyExistsError(`Slide ${name} in level ${levelId}`) })

        const findLevelById = new FindLevelByIdUseCase(this.levelsRepository)
        const possibleLevel = await findLevelById.execute({ id: levelId })
        if(possibleLevel.isLeft())
            return left({ error: new ResourceNotFoundError(`Level ${levelId} not found`) })

        const index = await this.slidesRepository.countSlidesInLevel(levelId)

        const slide = await this.slidesRepository.create({ baseCode, description, levelId, name, theme, index })

        return right({ slide })
    }
}