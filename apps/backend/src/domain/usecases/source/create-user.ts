import { Either, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/repositories/interface/users-repository"
import { User } from "@prisma/client"

interface CreateUserUseCaseRequest {
    name: string,
    email: string,
    linkedin_token: string | undefined,
    github_token: string | undefined,
}

type CreateUserUseCaseResponse = Either<
    null,
    { user: User }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ email, name, github_token, linkedin_token }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        

        const user = await this.usersRepository.create({
            email, github_token, linkedin_token, name,
        })

        return right({ user })
    }
}