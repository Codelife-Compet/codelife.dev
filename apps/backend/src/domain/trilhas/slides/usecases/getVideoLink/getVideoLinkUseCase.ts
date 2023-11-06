import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Video } from "../../../@entities/video"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { SlidesRepository } from "../../repositories/slidesInterfaceRepository"

interface GetVideoLinkUseCaseRequest {
    slideId: string,
}

type GetVideoLinkUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { videoLink: string }
>

export class GetVideoLinkUseCase {

    constructor(private slidesRepository: SlidesRepository) { }

    async execute({ slideId }: GetVideoLinkUseCaseRequest): Promise<GetVideoLinkUseCaseResponse> {

        const videoLink = await this.slidesRepository.getVideoLink(slideId)

        if (!videoLink) {
            return left({ error: new ResourceNotFoundError(`Slides's ${slideId} video`) })
        }

        return right({ videoLink })
    }
}