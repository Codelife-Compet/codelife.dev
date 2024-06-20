import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { DeleteIslandUseCase } from './deleteIslandUseCase';
import { z } from 'zod';

export const createIslandBodySchema = z.object({
	id: z.string(),
});

export async function deleteIslandController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createIslandBodySchema.parse(request.params);

	const islandsRepository = new IslandsPrismaRepository()
	const deleteIslandUseCase = new DeleteIslandUseCase(islandsRepository)
	const island = await deleteIslandUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
