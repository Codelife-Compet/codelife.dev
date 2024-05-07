import { LevelsPrismaRepository } from '@/domain/trilhas/level/repositories/levelPrismaRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindLevelByNameUseCase } from './findLevelByNameUseCase';

export const findLevelBodySchema = z.object({
	levelName: z.string(),
	islandId: z.string(),
});

export async function findLevelByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { levelName, islandId } = findLevelBodySchema.parse(request.body);

	const levelsRepository = new LevelsPrismaRepository()
    const findLevelByNameUseCase = new FindLevelByNameUseCase(levelsRepository)

	const level = await findLevelByNameUseCase.execute({ levelName, islandId });

	if (level.isLeft())
		return reply
			.status(400)
			.send(level.value.error)

	return reply
		.status(201)
		.send(level.value.level);
}
