import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"
import { Slide } from "@/domain/trilhas/@entities/slide"

interface FindSlideBySlideName_LevelIdRequest {
    slideName: string,
    levelId: string
}

type FindSlideBySlideName_LevelIdResponse = Either<
    { error: ResourceNotFoundError },
    { slide: Slide }
>

export class FindSlideByNameUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ levelId, slideName }: FindSlideBySlideName_LevelIdRequest): Promise<FindSlideBySlideName_LevelIdResponse> {

        const slide = await this.slidesRepository.findSlideBySlideName_LevelId(slideName, levelId)

        if (!slide)
            return left({ error: new ResourceNotFoundError(`Slide ${slideName} in level ${levelId}`) })

        return right({ slide })
    }
}