import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { FindIslandByIdUseCase } from './findIslandByIdUseCase';
import { z } from 'zod';

export const createIslandBodySchema = z.object({
	id: z.string(),
});

export async function findIslandByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createIslandBodySchema.parse(request.params);

	const islandsRepository = new IslandsPrismaRepository()
    const findIslandByIdUseCase = new FindIslandByIdUseCase(islandsRepository)

	const island = await findIslandByIdUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
