import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { PonctuationsPrismaRepository } from '../../repositories/ponctuationPrismaRepository';
import { CreatePonctuationUseCase } from './createPonctuationUseCase';

export const createPonctuationBodySchema = z.object({
	userName: z.string(),
	score: z.number(),
	levelId: z.string(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { levelId, score, userName } = createPonctuationBodySchema.parse(request.body);

	const ponctuationsRepository = new PonctuationsPrismaRepository()
    const createPonctuationUseCase = new CreatePonctuationUseCase(ponctuationsRepository)
	const ponctuation = await createPonctuationUseCase.execute({ levelId, score, userName });

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuation);
}
