import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateUserUseCase } from '../../usecases/factories/make-create-user-use-case';

const accountBodySchema = z.object({
	provider: z.string(),
	type: z.enum(["oauth", "email", "credentials"]),
	providerAccountId: z.string()
}) 

const userBodySchema = z.object({
	name: z.string().optional(),
	email: z.string().email().optional(),
	image: z.string().optional()
})

export const createUserBodySchema = z.object({
	user: userBodySchema,
	account: accountBodySchema,
});

export async function create(request: FastifyRequest, reply: FastifyReply) {

	const { account, user } = createUserBodySchema.parse(request.body);

	const createUserUseCase = makeCreateUserUseCase();

	console.log({ account, user });

	const createdUser = await createUserUseCase.execute({ user, account });

	if (createdUser.isLeft())
		return reply
			.status(400)
			.send({ error_message: createdUser.value.message })

	return reply.status(201).send({ created_user: createdUser.value.user });
}
