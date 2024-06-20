import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindUserCodeByIdUseCase } from './findUserCodeByIdUseCase';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';

export const findUserCodeBodySchema = z.object({
	id: z.string(),
});

export async function findUserCodeByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = findUserCodeBodySchema.parse(request.params);

	const usercodesRepository = new UserCodesPrismaRepository()
    const findUserCodeByIdUseCase = new FindUserCodeByIdUseCase(usercodesRepository)

	const usercode = await findUserCodeByIdUseCase.execute({ id });

	if (usercode.isLeft())
		return reply
			.status(400)
			.send(usercode.value.error)

	return reply
		.status(201)
		.send(usercode.value.usercode);
}
