import { Either, left, right } from "@/core/types/either"
import { User } from "@/domain/entities/user"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindUserByLinkedinTokenUseCase } from "./find-user-by-linkedin"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"

interface LoginUserLinkedinUseCaseRequest {
    linkedin_token: string,
}

type LoginUserLinkedinUseCaseResponse = Either<
    null | ResourceNotFoundError,
    { user: User, valid_token: string }
>

export class LoginUserLinkedinUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ linkedin_token }: LoginUserLinkedinUseCaseRequest): Promise<LoginUserLinkedinUseCaseResponse> {

        const findUserByLinkedin = new FindUserByLinkedinTokenUseCase(this.usersRepository)
        const possibleUserLinkedin = await findUserByLinkedin.execute({ linkedin_token })

        if(possibleUserLinkedin.isRight())
            return right({user: possibleUserLinkedin.value.user, valid_token: "Linkedin"})

        return left(new ResourceNotFoundError("Linkedin token"))
    }
}