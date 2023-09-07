import { makeCreateUserUseCase } from '@/domain/usecases/factories/make-create-user-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
	token: z.string(),
	token_type: z.enum(["google", "facebook", "github"])
});

export async function create(request: FastifyRequest, reply: FastifyReply) {

	const { email, name, token, token_type } = createUserBodySchema.parse(request.body);

	const createUserUseCase = makeCreateUserUseCase();

	const user = await createUserUseCase.execute({
		email, name, token, token_type
	});

	if(user.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: user.value.message })
	}

	return reply.status(201).send({ created_user: user.value });
}
