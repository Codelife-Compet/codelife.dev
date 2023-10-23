import { Either, left, right } from "@/core/types/either"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { Video } from "../../../@entities/video"
import { VideosRepository } from "../../repositories/videosInterfaceRepository"
import { FindVideoByVideoKey_SlideId } from "../findSlideBySlideName&LevelId/findVideoByVideoName&SlideIdUseCase"

interface CreateVideoUseCaseRequest {
    distributionName: string,
    videoKey: string
    slideId: string,
}

type CreateVideoUseCaseResponse = Either<
    { error: ResourceAlreadyExistsError },
    { video: Video }
>

export class CreateVideoUseCase {

    constructor(private videosRepository: VideosRepository) { }

    async execute({ distributionName, slideId, videoKey }: CreateVideoUseCaseRequest): Promise<CreateVideoUseCaseResponse> {

        const findVideoByVideoKey_SlideId = new FindVideoByVideoKey_SlideId(this.videosRepository)

        const possibleVideo = await findVideoByVideoKey_SlideId.execute({ slideId, videoKey })

        if (possibleVideo.isRight()) {
            return left({ error: new ResourceAlreadyExistsError(`Slides's ${name} video`) })
        }

        const video = await this.videosRepository.create({ distributionName, slideId, videoKey })

        return right({ video })
    }
}