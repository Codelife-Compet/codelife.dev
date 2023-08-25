import { PrismaUsersRepository } from "@/domain/repositories/prisma/prisma-users-repository"
import { FindUserByLinkedinTokenUseCase } from "../source/find-user-by-linkedin"

export function makeFindUserByLinkedinTokenUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new FindUserByLinkedinTokenUseCase(usersRepository)

    return useCase
}