import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { User } from "@/domain/users/entities/user"
import { AccountsRepository } from "../../repositories/interface/accountsRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindUserByEmailUseCase } from "./find-user-by-email"
import { FindUserByIdUseCase } from "./find-user-by-id"

interface DeleteUserUseCaseRequest {
    id: string
}

type DeleteUserUseCaseResponse = Either<
    { error: ResourceNotFoundError },
    { user: User }
>

export class DeleteUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ id }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {

        const fundUserByIdUseCase = new FindUserByIdUseCase(this.usersRepository)
        const fundUserByIdUseCaseResponse = await fundUserByIdUseCase.execute({ id })
        if (fundUserByIdUseCaseResponse.isLeft())
            return left({ error: new ResourceNotFoundError(`User '${id}'`) })

        const user = await this.usersRepository.delete(id)
        if (!user)
            return left({ error: new ResourceNotFoundError(`User ${id}`) })

        return right({ user })
    }
}
