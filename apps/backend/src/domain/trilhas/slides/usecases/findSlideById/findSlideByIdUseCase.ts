import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Slide } from "@/domain/trilhas/@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"

interface FindSlideByIdRequest {
    id: string
}

type FindSlideByIdResponse = Either<
    { error: ResourceNotFoundError },
    { slide: Slide }
>

export class FindSlideByIdUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ id }: FindSlideByIdRequest): Promise<FindSlideByIdResponse> {

        const slide = await this.slidesRepository.findById(id)

        if (!slide)
            return left({ error: new ResourceNotFoundError(`Slide ${id}`) })

        return right({ slide })
    }
}