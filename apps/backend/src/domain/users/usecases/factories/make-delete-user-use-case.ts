import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository"
import { DeleteUserUseCase } from "../source/deleteUser"

export function makeDeleteUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new DeleteUserUseCase(usersRepository)

    return useCase
}