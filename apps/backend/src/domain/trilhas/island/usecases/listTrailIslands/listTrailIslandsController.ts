import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { ListTrailIslandsUseCase } from './listTrailIslandsUseCase';
import { z } from 'zod';

export const listTrailIslandsBodySchema = z.object({
	id: z.string(),
});

export async function listTrailIslandsController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listTrailIslandsBodySchema.parse(request.params);

	const islandsRepository = new IslandsPrismaRepository()
    const listTrailIslandsUseCase = new ListTrailIslandsUseCase(islandsRepository)

	const island = await listTrailIslandsUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.islands);
}
