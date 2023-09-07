import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { FindUserByTokenUseCase } from "../source/find-user-by-token"

export function makeFindUserByTokenUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new FindUserByTokenUseCase(usersRepository)

    return useCase
}