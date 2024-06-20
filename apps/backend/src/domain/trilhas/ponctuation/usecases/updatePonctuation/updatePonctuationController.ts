import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { PonctuationsPrismaRepository } from '../../repositories/ponctuationPrismaRepository';
import { UpdatePonctuationUseCase } from './updatePonctuationUseCase';

export const updatePonctuationParamsSchema = z.object({
	id: z.string(),
});

export const updatePonctuationBodySchema = z.object({
    userName: z.string().optional(),
    score: z.number().optional(),
});

export async function updatePonctuationController(request: FastifyRequest, reply: FastifyReply) {

	const data = updatePonctuationBodySchema.parse(request.body);
	const { id } = updatePonctuationParamsSchema.parse(request.params);
	
    const ponctuationsRepository = new PonctuationsPrismaRepository()
    const updatePonctuationUseCase = new UpdatePonctuationUseCase(ponctuationsRepository)

	const ponctuation = await updatePonctuationUseCase.execute({ id, data });

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuation);
}
