import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UserCode } from "../../../@entities/userCode"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"

interface FindUserCodeByUserNameUseCaseRequest {
    userName: string,
    slideId: string
}

type FindUserCodeByUserNameUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { userCode: UserCode }
>

export class FindUserCodeByUserNameUseCase {

    constructor(private userCodesRepository: UserCodesRepository) { }

    async execute({ userName, slideId }: FindUserCodeByUserNameUseCaseRequest): Promise<FindUserCodeByUserNameUseCaseResponse> {

        const userCode = await this.userCodesRepository.findByUserName(userName, slideId)

        if (!userCode)
            return left({ error: new ResourceNotFoundError(`UserCode from ${userName} in slide ${slideId}`) })

        return right({ userCode })
    }
}