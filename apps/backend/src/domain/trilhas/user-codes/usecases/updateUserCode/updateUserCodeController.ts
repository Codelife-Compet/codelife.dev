import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UpdateUserCodeUseCase } from './updateUserCodeUseCase';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';

export const updateUserCodeParamsSchema = z.object({
	id: z.string(),
});

export const updateUserCodeBodySchema = z.object({
	userName: z.string().optional(),
    code: z.string().optional(),
});

export async function updateUserCodeController(request: FastifyRequest, reply: FastifyReply) {

	const data = updateUserCodeBodySchema.parse(request.body);
	const { id } = updateUserCodeParamsSchema.parse(request.params);
	
    const usercodesRepository = new UserCodesPrismaRepository()
    const updateUserCodeUseCase = new UpdateUserCodeUseCase(usercodesRepository)

	const usercode = await updateUserCodeUseCase.execute({ id, ...data });

	if (usercode.isLeft())
		return reply
			.status(400)
			.send(usercode.value.error)

	return reply
		.status(201)
		.send(usercode.value.usercode);
}
