import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { UpdateIslandUseCase } from './updateIslandUseCase';

export const updateIslandParamsSchema = z.object({
	id: z.string(),
});

export const updateIslandBodySchema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	theme: z.string().optional(),
});

export async function updateIslandController(request: FastifyRequest, reply: FastifyReply) {

	const { description, name, theme } = updateIslandBodySchema.parse(request.body);
	const { id } = updateIslandParamsSchema.parse(request.params);
	
    const islandsRepository = new IslandsPrismaRepository()
    const updateIslandUseCase = new UpdateIslandUseCase(islandsRepository)

	const island = await updateIslandUseCase.execute({ id, description, name, theme });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.island);
}
