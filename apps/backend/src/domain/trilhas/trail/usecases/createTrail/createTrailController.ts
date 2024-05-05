import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateTrailUseCase } from './makeCreateTrailUseCase';
import { createIslandBodySchema } from '@/domain/trilhas/island/usecases/createIsland/createIslandController';

export const createTrailBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	islands: z.array(createIslandBodySchema).optional()
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { description, islands, name, theme } = createTrailBodySchema.parse(request.body);

	const createTrailUseCase = makeCreateTrailUseCase();

	const trail = await createTrailUseCase.execute({ description, name, theme });

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trail);
}
