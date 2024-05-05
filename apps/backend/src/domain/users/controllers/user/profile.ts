import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeGetUserProfileUseCase } from '../../usecases/factories/make-get-user-profile-use-case';
import { User } from '../../entities/user';

export const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
	token: z.string(),
	token_type: z.enum(["google", "facebook", "github"])
});

export async function profile(request: FastifyRequest, reply: FastifyReply) {

	const getUserProfile = makeGetUserProfileUseCase();

	const user = await getUserProfile.execute({ userId: request.user.sub });
    if (user.isLeft()) {
        return reply
            .status(400)
            .send(user.value)
    }

	const userData = user.value.user.data;
	userData.password = undefined;

	return reply
		.status(200)
		.send(new User(userData, user.value.user.id)); 
}
