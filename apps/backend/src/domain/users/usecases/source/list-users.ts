import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { User } from "@/domain/users/entities/user"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

type ListUserUseCaseResponse = Either<
    ResourceAlreadyExistsError,
    { users: User[] }
>

export class ListUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute  (): Promise<ListUserUseCaseResponse> {

        const users: User[] = await this.usersRepository.list()
        if (users.length === 0) {
            return left(new ResourceNotFoundError(`Users`))
        }

        return right({ users })
    }
}