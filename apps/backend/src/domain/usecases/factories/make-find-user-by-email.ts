import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { FindUserByEmailUseCase } from "../source/find-user-by-email"

export function makeFindUserByEmailUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new FindUserByEmailUseCase(usersRepository)

    return useCase
}