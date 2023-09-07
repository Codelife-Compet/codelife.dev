import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { FindUserByEmailPasswordUseCase } from "../source/find-user-by-email-password"

export function makeFindUserByEmailPasswordUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new FindUserByEmailPasswordUseCase(usersRepository)

    return useCase
}