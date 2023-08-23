import { Either, right } from "@/core/types/either"
import { UserProps } from "@/domain/entities/user"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"

interface CreateUserUseCaseRequest {
    name: string,
    email: string,
    linkedin_token?: string,
    github_token?: string,
}

type CreateUserUseCaseResponse = Either<
    null,
    { user: UserProps }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email, name, github_token, linkedin_token }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        github_token = (github_token ? github_token : "")
        linkedin_token = (linkedin_token ? linkedin_token : "")

        const user = await this.usersRepository.create({
            email, github_token, linkedin_token, name,
        })

        return right({ user })
    }
}