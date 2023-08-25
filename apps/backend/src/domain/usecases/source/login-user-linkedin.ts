import { Either, left, right } from "@/core/types/either"
import { User } from "@prisma/client"
import { makeFindUserByLinkedinTokenUseCase } from "../factories/make-find-user-by-linkedin-use-case"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface LoginUserLinkedinUseCaseRequest {
    linkedin_token: string,
}

type LoginUserLinkedinUseCaseResponse = Either<
    null | ResourceNotFoundError,
    { user: User, valid_token: string }
>

export class LoginUserLinkedinUseCase {

    constructor() { }

    async execute({ linkedin_token }: LoginUserLinkedinUseCaseRequest): Promise<LoginUserLinkedinUseCaseResponse> {

        const findUserByLinkedin = makeFindUserByLinkedinTokenUseCase()
        const possibleUserLinkedin = await findUserByLinkedin.execute({ linkedin_token })

        if(possibleUserLinkedin.isRight())
            return right({user: possibleUserLinkedin.value.user, valid_token: "Linkedin"})

        return left(new ResourceNotFoundError("Linkedin token"))
    }
}