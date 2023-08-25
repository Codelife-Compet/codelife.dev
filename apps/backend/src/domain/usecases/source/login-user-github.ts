import { Either, left, right } from "@/core/types/either"
import { User } from "@prisma/client"
import { makeFindUserByGithubTokenUseCase } from "../factories/make-find-user-by-github-use-case"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"

interface LoginUserGithubUseCaseRequest {
    github_token: string,
}

type LoginUserGithubUseCaseResponse = Either<
    null | ResourceNotFoundError,
    { user: User, valid_token: string }
>

export class LoginUserGithubUseCase {

    constructor() { }

    async execute({ github_token }: LoginUserGithubUseCaseRequest): Promise<LoginUserGithubUseCaseResponse> {

        const findUserByGithub = makeFindUserByGithubTokenUseCase()
        const possibleUserGithub = await findUserByGithub.execute({ github_token })

        if(possibleUserGithub.isRight())
            return right({user: possibleUserGithub.value.user, valid_token: "Github"})

        return left(new ResourceNotFoundError("Github token"))
    }
}