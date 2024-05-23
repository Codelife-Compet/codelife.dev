import { Either, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"
import { Slide } from "@/domain/trilhas/@entities/slide"

interface ListLevelSlidesUseCaseRequest {
    id: string
}

type ListLevelSlidesUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { slides: Slide[] }
>

export class ListLevelSlidesUseCase {

    constructor(private levelsRepository: SlidesRepository) { }

    async execute({ id } : ListLevelSlidesUseCaseRequest): Promise<ListLevelSlidesUseCaseResponse> {

        const slides = await this.levelsRepository.listByLevelId(id);

        return right({ slides })
    }
}