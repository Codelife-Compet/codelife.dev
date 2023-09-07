import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { FindUserUseCaseResponse } from "./find-user-by-token"

interface FindUserByEmailPasswordUseCaseRequest {
    email: string,
    password: string,
}

export class FindUserByEmailPasswordUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email, password }: FindUserByEmailPasswordUseCaseRequest): Promise<FindUserUseCaseResponse> {

        const user = await this.usersRepository.findByEmailPassword(email, password)

        if (!user)
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}