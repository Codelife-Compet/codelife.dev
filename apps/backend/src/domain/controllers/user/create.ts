import { makeCreateUserUseCase } from '@/domain/usecases/factories/make-create-user-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    linkedin_token: z.string().optional(),
    github_token: z.string().optional(),
});

export async function create(request: FastifyRequest, reply: FastifyReply) {

	const { email, name, github_token, linkedin_token } = createUserBodySchema.parse(request.body);

	const createUserUseCase = makeCreateUserUseCase();

	const user = await createUserUseCase.execute({
		email, name, github_token, linkedin_token
	});

	if(user.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: user.value.message })
	}

	return reply.status(201).send({ created_user: user.value });
}
