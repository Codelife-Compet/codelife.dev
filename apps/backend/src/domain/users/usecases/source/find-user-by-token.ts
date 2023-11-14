import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { User } from "@/domain/users/entities/user"

interface FindUserByTokenUseCaseRequest {
    token: string,
    type: string
}

export type FindUserUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User }
>

export class FindUserByTokenUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ token, type }: FindUserByTokenUseCaseRequest): Promise<FindUserUseCaseResponse> {

        const user = await this.usersRepository.findByToken(token, type)

        if (!user)
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}