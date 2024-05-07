import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Slide } from "../../../@entities/slide"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository";

type ListSlidesUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { slides: Slide[] }
>

export class ListSlidesUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute(): Promise<ListSlidesUseCaseResponse> {

        const slides = await this.slidesRepository.list();

        return right({ slides })
    }
}