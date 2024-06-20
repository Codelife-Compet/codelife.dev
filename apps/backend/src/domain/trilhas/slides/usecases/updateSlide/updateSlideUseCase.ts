import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Slide } from "@/domain/trilhas/@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"

interface UpdateSlideUseCaseRequest {
    id: string
    name?: string
    description?: string
    theme?: string
    baseCode?: string
}

type UpdateSlideUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { slide: Slide }
>

export class UpdateSlideUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ description, name, theme, id }: UpdateSlideUseCaseRequest): Promise<UpdateSlideUseCaseResponse> {

        const slide = await this.slidesRepository.update(id, { description, name, theme })

        if (!slide)
            return left({ error: new ResourceNotFoundError(`Slide ${id}`) })

        return right({ slide })
    }
}