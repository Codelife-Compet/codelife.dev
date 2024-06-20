import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteUserCodeUseCase } from './deleteUserCodeUseCase';
import { z } from 'zod';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';

export const createUserCodeBodySchema = z.object({
	id: z.string(),
});

export async function deleteUserCodeController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createUserCodeBodySchema.parse(request.params);

	const usercodesRepository = new UserCodesPrismaRepository()
	const deleteUserCodeUseCase = new DeleteUserCodeUseCase(usercodesRepository)
	const usercode = await deleteUserCodeUseCase.execute({ id });

	if (usercode.isLeft())
		return reply
			.status(400)
			.send(usercode.value.error)

	return reply
		.status(201)
		.send(usercode.value.usercode);
}
