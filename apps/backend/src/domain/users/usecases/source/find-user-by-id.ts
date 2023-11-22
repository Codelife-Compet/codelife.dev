import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { User } from "@/domain/users/entities/user"

interface FindUserByIdUseCaseRequest {
    id: string,
}

export type FindUserUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User }
>

export class FindUserByIdUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ id }: FindUserByIdUseCaseRequest): Promise<FindUserUseCaseResponse> {

        const user = await this.usersRepository.findById(id)
        if (!user)
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}