import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error';
import { makeLoginUserLinkedinUseCase } from '@/domain/usecases/factories/make-login-linkedin-user';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export const loginUserBodySchema = z.object({
    linkedin_token: z.string(),
});

export async function loginLinkedin(request: FastifyRequest, reply: FastifyReply) {

	const { linkedin_token } = loginUserBodySchema.parse(request.params);

	const loginUserLinkedinUseCase = makeLoginUserLinkedinUseCase();

	const user = await loginUserLinkedinUseCase.execute({ linkedin_token });

	if(user.isLeft() && user.value instanceof ResourceNotFoundError) {
		return reply
			.status(400)
			.send({ error_message: user.value.message})
	}

	return reply
        .status(201)
        .send({ logind_user: user.value });
}
