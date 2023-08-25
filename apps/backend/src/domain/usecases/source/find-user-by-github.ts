import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { User } from "@prisma/client"

interface FindUserByGithubTokenUseCaseRequest {
    github_token: string
}

type FindUserByGithubTokenUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User }
>

export class FindUserByGithubTokenUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ github_token }: FindUserByGithubTokenUseCaseRequest): Promise<FindUserByGithubTokenUseCaseResponse> {

        const user = await this.usersRepository.findByGithubToken( github_token )

        if(!user) 
            return left(new ResourceNotFoundError("User"))

        return right({ user })
    }
}