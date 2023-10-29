import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateUserUseCase } from '../../usecases/factories/make-create-user-use-case';

const accountBodySchema = z.object({
	userId: z.string().optional(),
	provider: z.string(),
	type: z.enum(["oauth", "email", "credentials"]),
	providerAccountId: z.string()
}) 

const userBodySchema = z.object({
	id: z.string(),
	name: z.string().nullable().optional(),
	email: z.string().email().nullable().optional(),
	image: z.string().nullable().optional()
})

export const createUserBodySchema = z.object({
	user: userBodySchema,
	account: accountBodySchema,
});

export async function create(request: FastifyRequest, reply: FastifyReply) {

	const { account, user } = createUserBodySchema.parse(request.body);

	const createUserUseCase = makeCreateUserUseCase();

	const createdUser = await createUserUseCase.execute({
		account, user
	});

	if(createdUser.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: createdUser.value.message })
	}

	return reply.status(201).send({ created_user: createdUser.value.user });
}
