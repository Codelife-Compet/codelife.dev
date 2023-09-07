import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { FindUserUseCaseResponse } from "./find-user-by-token"

interface FindUserByEmailUseCaseRequest {
    email: string,
}

export class FindUserByEmailUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email }: FindUserByEmailUseCaseRequest): Promise<FindUserUseCaseResponse> {

        const user = await this.usersRepository.findByEmail(email)

        if (!user)
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}