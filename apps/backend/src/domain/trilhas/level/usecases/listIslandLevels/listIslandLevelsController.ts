import { FastifyReply, FastifyRequest } from 'fastify';
import { ListIslandLevelsUseCase } from './listIslandLevelsUseCase';
import { z } from 'zod';
import { LevelsPrismaRepository } from '../../repositories/levelPrismaRepository';

export const listIslandLevelsBodySchema = z.object({
	id: z.string(),
});

export async function listIslandLevelsController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listIslandLevelsBodySchema.parse(request.params);

	const islandsRepository = new LevelsPrismaRepository()
    const listIslandLevelsUseCase = new ListIslandLevelsUseCase(islandsRepository)

	const island = await listIslandLevelsUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.levels);
}
