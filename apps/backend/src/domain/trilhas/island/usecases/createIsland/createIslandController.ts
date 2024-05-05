import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { CreateIslandUseCase } from './createIslandUseCase';

export const createIslandBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	trailId: z.string(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { description, name, theme, trailId } = createIslandBodySchema.parse(request.body);

    const islandsRepository = new IslandsPrismaRepository()
    const createIslandUseCase = new CreateIslandUseCase(islandsRepository)
	const island = await createIslandUseCase.execute({ description, name, theme, trailId });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
