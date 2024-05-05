import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { FindIslandByNameUseCase } from './findIslandByNameUseCase';
import { z } from 'zod';

export const findIslandBodySchema = z.object({
	islandName: z.string(),
	trailId: z.string(),
});

export async function findIslandByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { islandName, trailId } = findIslandBodySchema.parse(request.body);

	const islandsRepository = new IslandsPrismaRepository()
    const findIslandByNameUseCase = new FindIslandByNameUseCase(islandsRepository)

	const island = await findIslandByNameUseCase.execute({ islandName, trailId });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
