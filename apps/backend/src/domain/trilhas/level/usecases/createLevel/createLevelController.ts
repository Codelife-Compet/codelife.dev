import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { LevelsPrismaRepository } from '../../repositories/levelPrismaRepository';
import { CreateLevelUseCase } from './createLevelUseCase';
import { IslandsPrismaRepository } from '@/domain/trilhas/island/repositories/islandPrismaRepository';

export const createLevelBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	islandId: z.string()
});

export async function createLevelController(request: FastifyRequest, reply: FastifyReply) {

	const { description, islandId, name, theme } = createLevelBodySchema.parse(request.body);

    const levelsRepository = new LevelsPrismaRepository()
	const islandsRepository = new IslandsPrismaRepository()
    const createLevelUseCase = new CreateLevelUseCase(levelsRepository, islandsRepository)
	const level = await createLevelUseCase.execute({ description, islandId, name, theme });

	if (level.isLeft()) {
		return reply
			.status(400)
			.send(level.value.error)
	}

	return reply
		.status(201)
		.send(level.value.level);
}
