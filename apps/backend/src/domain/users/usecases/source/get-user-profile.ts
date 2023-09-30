import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { Either, left, right } from "@/core/types/either";
import { User } from "@/domain/users/entities/user";
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository";

interface GetUserProfileUseCaseRequest {
	userId: string
}

type GetUserProfileUseCaseResponse = Either<
    ResourceNotFoundError,
    { user: User }
>

export class GetUserProfileCase {
	constructor(private usersRepository: UsersRepository) { }

	async execute({ userId }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
		const user = await this.usersRepository.findById(userId);

		console.log({userId: userId})

		if (!user)
			return left(new ResourceNotFoundError("User"))

		return right({ user })
	}
}