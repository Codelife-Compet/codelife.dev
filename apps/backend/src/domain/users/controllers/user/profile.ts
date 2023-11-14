import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeGetUserProfileUseCase } from '../../usecases/factories/make-get-user-profile-use-case';

export const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
	token: z.string(),
	token_type: z.enum(["google", "facebook", "github"])
});

export async function profile(request: FastifyRequest, reply: FastifyReply) {

	const getUserProfile = makeGetUserProfileUseCase();

	const user = await getUserProfile.execute({
		userId: request.user.sub
	});
    if (user.isLeft()) {
        return reply
            .status(400)
            .send({ error_message: user.value.message })
    }


	return reply
		.status(200)
		.send({
			user: {
				...user.value.user,
				password_hash: undefined // para segurança 
			}
		}); 
}
