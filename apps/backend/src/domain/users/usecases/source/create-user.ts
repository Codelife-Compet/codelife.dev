import { Either, left, right } from "@/core/types/either"
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository"
import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error"
import { User } from "@/domain/users/entities/user"
import { AccountsRepository } from "../../repositories/interface/accountsRepository"
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error"
import { FindUserByEmailUseCase } from "./find-user-by-email"

interface CreateUserUseCaseRequest {
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
    },
    account: {
        provider: string
        type: string
        providerAccountId: string
    }
}

type CreateUserUseCaseResponse = Either<
    ResourceAlreadyExistsError,
    { user: User }
>

export class CreateUserUseCase {

    constructor(private usersRepository: UsersRepository,
        private accountsRepository: AccountsRepository) { }

    async execute({ account, user }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        const findUserByEmailUseCase = new FindUserByEmailUseCase(this.usersRepository)
        const findUserByEmailUseCaseResponse = await findUserByEmailUseCase.execute({ email: user.email as string })

        console.log(1111111111111)

        let userId = "";
        if (findUserByEmailUseCaseResponse.isRight()) {
            userId = findUserByEmailUseCaseResponse.value.user.id.toString()
        } else {
            const createdUser = await this.usersRepository.create(new User({
                name: user.name,
                email: user.email,
                image: user.image,
            }))
            userId = createdUser.id.toString()
        }
        console.log(2222222222222)

        const possibleAccount = await this.accountsRepository.findAccountByProvider_UserId(account.provider, userId)
        if (possibleAccount)
            return left(new ResourceAlreadyExistsError(`User ${userId} with ${account.provider} account`))

        const { provider, providerAccountId, type } = account

        console.log("asd")

        await this.accountsRepository.create({ userId, provider, providerAccountId, type })

        const newUser = await this.usersRepository.findById(userId)
        if (!newUser)
            return left(new ResourceNotFoundError(`New User ${userId}`))

        return right({ user: newUser })
    }
}
