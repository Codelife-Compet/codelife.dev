import { PrismaUsersRepository } from "@/domain/users/repositories/prisma/prisma-users-repository";
import { GetUserProfileCase } from "../source/get-user-profile";

export function makeGetUserProfileUseCase() {
	const usersRepository = new PrismaUsersRepository();
	const useCase = new GetUserProfileCase(usersRepository);

	return useCase;
}