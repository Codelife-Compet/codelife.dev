import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error';
import { makeLoginUserGithubUseCase } from '@/domain/usecases/factories/make-login-github-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export const loginUserBodySchema = z.object({
    github_token: z.string(),
});

export async function loginGithub(request: FastifyRequest, reply: FastifyReply) {

	const { github_token } = loginUserBodySchema.parse(request.params);

	const loginUserGithubUseCase = makeLoginUserGithubUseCase();

	const user = await loginUserGithubUseCase.execute({ github_token });

	if(user.isLeft() && user.value instanceof ResourceNotFoundError) {
		return reply
			.status(400)
			.send({ error_message: user.value.message})
	}

	return reply
		.status(201)
		.send({ logind_user: user.value });
}
