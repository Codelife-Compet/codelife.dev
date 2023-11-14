import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Slide } from "../../../@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"
import { FindSlideBySlideName_LevelId } from "../findSlideBySlideName&LevelId/findSlideBySlideName&LevelIdUseCase"

interface CreateSlideUseCaseRequest {
    name: string
    description: string
    theme: string
    baseCode: string // linhas de código base para aquela atividade
    // video: string
    levelId: string
}

type CreateSlideUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { slide: Slide }
>

export class CreateSlideUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ baseCode, description, levelId, name, theme }: CreateSlideUseCaseRequest): Promise<CreateSlideUseCaseResponse> {

        const findSlideByUserNameUseCase = new FindSlideBySlideName_LevelId(this.slidesRepository)

        const possibleSlide = await findSlideByUserNameUseCase.execute({ levelId, slideName: name })

        if (possibleSlide.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Levels's ${name} slide`) })
        }

        const slide = await this.slidesRepository.create({ baseCode, description, levelId, name, theme })

        return right({ slide })
    }
}