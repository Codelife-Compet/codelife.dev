import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { User } from "@prisma/client"

interface FindUserByLinkedinTokenUseCaseRequest {
    linkedin_token: string
}

type FindUserByLinkedinTokenUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User }
>

export class FindUserByLinkedinTokenUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ linkedin_token }: FindUserByLinkedinTokenUseCaseRequest): Promise<FindUserByLinkedinTokenUseCaseResponse> {

        const user = await this.usersRepository.findByLinkedinToken( linkedin_token )

        if(!user) 
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}