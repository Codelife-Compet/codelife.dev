import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { User } from "@/domain/users/entities/user"
import { FindUserByTokenUseCase } from "./find-user-by-token"
import { FindUserByEmailUseCase } from "./find-user-by-email"
import { randomUUID } from 'node:crypto'


interface CreateUserUseCaseRequest {
    user: {
        id: string
        name?: string | null
        email?: string | null
        image?: string | null
    }
    account: {
        providerAccountId: string
        userId?: string
        provider: string
        type: "oauth" | "email" | "credentials"
    }
}

type CreateUserUseCaseResponse = Either<
    ResourceAlreadyExistsError,
    { user: User }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository) { }

    async execute({ account, user }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        const findUserByTokenUseCase = new FindUserByTokenUseCase(this.usersRepository)

        const possibleUser = await findUserByTokenUseCase.execute({ token: user.id, type: account.provider })

        if (possibleUser.isRight()) {
            console.log("Deu caca")
            return left(new ResourceAlreadyExistsError(`User's ${account.provider} token`))
        }

        const findUserByEmailUseCase = new FindUserByEmailUseCase(this.usersRepository)

        if (user.email) {
            const possibleUser2 = await findUserByEmailUseCase.execute({ email: user.email })

            if (possibleUser2.isRight()) {
                
                possibleUser2.value.user.accounts.push({
                    id: randomUUID(),
                    providerAccountId: account.providerAccountId,
                    userId: account.userId as string,
                    provider: account.provider,
                    type: account.type
                })

                const createdUser = await this.usersRepository.create({
                    id: user.id,
                    name: user.name ?? undefined,
                    email: user.email ?? undefined,
                    image: user.image ?? undefined,
                    role: 'USER', // add default value for role
                    score: 0, // add default value for score
                    accounts: possibleUser2.value.user.accounts,
                })

                return right({ user: createdUser })
            }
        }

        const createdUser = await this.usersRepository.create({
            id: user.id,
            name: user.name ?? undefined,
            email: user.email ?? undefined,
            image: user.image ?? undefined,
            role: 'USER', // add default value for role
            score: 0, // add default value for score
            accounts: [{
                id: randomUUID(),
                providerAccountId: account.providerAccountId,
                userId: account.userId as string,
                provider: account.provider,
                type: account.type
            }],
        })

        return right({ user: createdUser })
    }
}