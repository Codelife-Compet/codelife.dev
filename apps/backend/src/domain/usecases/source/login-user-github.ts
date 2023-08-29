import { Either, left, right } from "@/core/types/either"
import { User } from "@/domain/entities/user"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { FindUserByGithubTokenUseCase } from "./find-user-by-github"

interface LoginUserGithubUseCaseRequest {
    github_token: string,
}

type LoginUserGithubUseCaseResponse = Either<
    null | ResourceNotFoundError,
    { user: User, valid_token: string }
>

export class LoginUserGithubUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ github_token }: LoginUserGithubUseCaseRequest): Promise<LoginUserGithubUseCaseResponse> {

        const findUserByGithub = new FindUserByGithubTokenUseCase(this.usersRepository)
        const possibleUserGithub = await findUserByGithub.execute({ github_token })

        if(possibleUserGithub.isRight())
            return right({user: possibleUserGithub.value.user, valid_token: "Github"})

        return left(new ResourceNotFoundError("Github token"))
    }
}