import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { User } from "@/domain/entities/user"
import { makeFindUserByTokenUseCase } from "../factories/make-find-user-by-token"
import { makeFindUserByEmailUseCase } from "../factories/make-find-user-by-email"

interface CreateUserUseCaseRequest {
    name: string,
    email: string,
    token: string,
    token_type: string
}

type CreateUserUseCaseResponse = Either<
    ResourceAlreadyExistsError,
    { user: User }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email, name, token, token_type }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        const findUserByTokenUseCase = makeFindUserByTokenUseCase()

        const possibleUser = await findUserByTokenUseCase.execute({ token, type: token_type })

        if (possibleUser.isRight()) {
            return left(new ResourceAlreadyExistsError(`User's ${token_type} token`))
        }

        const findUserByEmailUseCase = makeFindUserByEmailUseCase()

        const possibleUser2 = await findUserByEmailUseCase.execute({ email })

        if (possibleUser2.isRight()) {
            return left(new ResourceAlreadyExistsError(`User's email`))
        }

        let user: User;

        switch (token_type) {
            case "google": user = await this.usersRepository.create({ email, name, role: "USER", google_token: token })
                break;

            case "github": user = await this.usersRepository.create({ email, name, role: "USER", github_token: token })
                break;

            default: user = await this.usersRepository.create({ email, name, role: "USER", facebook_token: token })
                break;
        }

        return right({ user })
    }
}