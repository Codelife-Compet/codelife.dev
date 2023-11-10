import { Either, left, right } from "@/core/types/either"
import { User } from "@/domain/entities/user"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { FindUserByTokenUseCase, FindUserUseCaseResponse } from "./find-user-by-token"
import { InvalidInputError } from "@/core/errors/invalid-input-error"
import { FindUserByEmailUseCase } from "./find-user-by-email"

interface LoginUserUseCaseRequest {
    token?: string,
    email?: string,
    password?: string,
    type: string
}

export type LoginUserUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User, valid_token: string }
>

export class LoginUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ type, email, password, token }: LoginUserUseCaseRequest): Promise<LoginUserUseCaseResponse> {
        let possibleUser: FindUserUseCaseResponse;

        if (!type)
            return left(new InvalidInputError("Token Type"))

        if (type === "email") {
            const findUserByEmailUseCase = new FindUserByEmailUseCase(this.usersRepository)
            possibleUser = await findUserByEmailUseCase.execute({ email: email as string })

            if (possibleUser.isLeft())
                return left(new ResourceNotFoundError("User Email or password"))

            if (possibleUser.value.user.password !== password)
                return left(new InvalidInputError("User Email or password"))

        } else {
            const findUserByTokenUseCase = new FindUserByTokenUseCase(this.usersRepository)

            possibleUser = await findUserByTokenUseCase.execute({ token: token as string, type })

            if (possibleUser.isLeft())
                return left(new ResourceNotFoundError("User Token"))
        }

        return right({ user: possibleUser.value.user, valid_token: token as string })
    }
}