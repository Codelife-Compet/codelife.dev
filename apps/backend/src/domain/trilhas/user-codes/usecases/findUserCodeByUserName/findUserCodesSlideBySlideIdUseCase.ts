import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"
import { UserCode } from "../../../@entities/userCode"

interface FindUserCodesSlideBySlideIdRequest {
    slideId: string,
}

type FindUserCodesSlideBySlideIdResponse = Either<
    ResourceNotFoundError,
    { userCode: UserCode }
>

export class FindUserCodesSlideBySlideId {

    constructor(private userCodesRepository: UserCodesRepository) { }

    async execute({ slideId }: FindUserCodesSlideBySlideIdRequest): Promise<FindUserCodesSlideBySlideIdResponse> {

        const userCode = await this.userCodesRepository.findUserCodeBySlideId(slideId)

        if (!userCode)
            return left(new ResourceNotFoundError("UserCode's Slide"))

        return right({ userCode })
    }
}