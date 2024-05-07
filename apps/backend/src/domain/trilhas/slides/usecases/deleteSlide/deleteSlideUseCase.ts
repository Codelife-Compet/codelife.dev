import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { Slide } from "@/domain/trilhas/@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"

interface DeleteSlideUseCaseRequest {
    id: string
}

type DeleteSlideUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { slide: Slide }
>

export class DeleteSlideUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ id }: DeleteSlideUseCaseRequest): Promise<DeleteSlideUseCaseResponse> {

        const slide = await this.slidesRepository.delete(id)
        if (!slide)
            return left({ error: new ResourceNotFoundError(`Slide ${id}`) })

        return right({ slide })
    }
}