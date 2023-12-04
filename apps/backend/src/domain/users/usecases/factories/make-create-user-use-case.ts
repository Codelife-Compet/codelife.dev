import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { CreateUserUseCase } from "../source/create-user"
import { AccountsPrismaRepository } from "../../repositories/prisma/accountsPrismaRepository"

export function makeCreateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const accountsRepository = new AccountsPrismaRepository()
    const useCase = new CreateUserUseCase(usersRepository, accountsRepository)

    return useCase
}