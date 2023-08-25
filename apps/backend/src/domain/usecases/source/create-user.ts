import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { User } from "@prisma/client"
import { FindUserByGithubTokenUseCase } from "./find-user-by-github"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { FindUserByLinkedinTokenUseCase } from "./find-user-by-linkedin"

interface CreateUserUseCaseRequest {
    name: string,
    email: string,
    linkedin_token?: string,
    github_token?: string ,
}

type CreateUserUseCaseResponse = Either<
    ResourceAlreadyExistsError,
    { user: User }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email, name, github_token, linkedin_token }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        if(github_token) {
            const findUserByGithubTokenUseCase = new FindUserByGithubTokenUseCase(this.usersRepository)
            const possibleUser = await findUserByGithubTokenUseCase.execute({ github_token })
            
            if(possibleUser.isRight())
                return left(new ResourceAlreadyExistsError("Users github token"))
        }

        if(linkedin_token) {
            const findUserByLinkedinTokenUseCase = new FindUserByLinkedinTokenUseCase(this.usersRepository)
            const possibleUser = await findUserByLinkedinTokenUseCase.execute({ linkedin_token })
            
            if(possibleUser.isRight())
                return left(new ResourceAlreadyExistsError("Users linkedin token"))
        }

        const user = await this.usersRepository.create({
            email, github_token, linkedin_token, name,
        })

        return right({ user })
    }
}