import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { CreateIslandUseCase } from './createIslandUseCase';
import { TrailsPrismaRepository } from '@/domain/trilhas/trail/repositories/trailPrismaRepository';

export const createIslandBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	trailId: z.string(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {
	
	const { description, name, theme, trailId } = createIslandBodySchema.parse(request.body);

	const islandsRepository = new IslandsPrismaRepository();
	const trailsRepository = new TrailsPrismaRepository();
	const createIslandUseCase = new CreateIslandUseCase(islandsRepository, trailsRepository);
	
	const island = await createIslandUseCase.execute({ description, name, theme, trailId });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error);

	return reply
		.status(201)
		.send(island.value.island);
}
