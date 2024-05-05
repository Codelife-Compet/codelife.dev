import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { FindIslandByNameUseCase } from './findIslandByNameUseCase';
import { z } from 'zod';

export const createIslandBodySchema = z.object({
	name: z.string(),
});

export async function findIslandByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { name } = createIslandBodySchema.parse(request.params);

	const islandsRepository = new IslandsPrismaRepository()
    const findIslandByNameUseCase = new FindIslandByNameUseCase(islandsRepository)

	const island = await findIslandByNameUseCase.execute({ name });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
