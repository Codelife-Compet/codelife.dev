import { LevelsPrismaRepository } from '@/domain/trilhas/level/repositories/levelPrismaRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindLevelByIdUseCase } from './findLevelByIdUseCase';

export const findLevelBodySchema = z.object({
	id: z.string(),
});

export async function findLevelByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = findLevelBodySchema.parse(request.params);

	const levelsRepository = new LevelsPrismaRepository()
    const findLevelByIdUseCase = new FindLevelByIdUseCase(levelsRepository)

	const level = await findLevelByIdUseCase.execute({ id });

	if (level.isLeft())
		return reply
			.status(400)
			.send(level.value.error)

	return reply
		.status(201)
		.send(level.value.level);
}
