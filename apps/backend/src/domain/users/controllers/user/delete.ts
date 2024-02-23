import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteUserUseCase } from '../../usecases/factories/make-delete-user-use-case';

export const createUserBodySchema = z.object({
	id: z.string(),
});

export async function deleteController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = createUserBodySchema.parse(request.body);

	const deleteUserUseCase = makeDeleteUserUseCase();

	const deleted = await deleteUserUseCase.execute({ id });

	if (deleted.isLeft())
		return reply
			.status(400)
			.send(deleted.value.error)

	return reply.status(201).send(deleted.value.user);
}
