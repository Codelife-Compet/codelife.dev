import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UserCode } from "../../entities/userCode"
import { UserCodesRepository } from "../../repositories/userCodesInterfaceRepository"

interface FindUserCodeByUserNameUseCaseRequest {
    userName: string,
}

type FindUserCodeByUserNameUseCaseResponse = Either<
    ResourceNotFoundError,
    { userCode: UserCode }
>

export class FindUserCodeByUserNameUseCase {

    constructor(private userCodesRepository: UserCodesRepository) { }

    async execute({ userName }: FindUserCodeByUserNameUseCaseRequest): Promise<FindUserCodeByUserNameUseCaseResponse> {

        const userCode = await this.userCodesRepository.findByUserName(userName)

        if (!userCode)
            return left(new ResourceNotFoundError("User"))

        return right({ userCode })
    }
}