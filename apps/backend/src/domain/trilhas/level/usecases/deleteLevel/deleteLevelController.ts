import { FastifyReply, FastifyRequest } from 'fastify';
import { LevelsPrismaRepository } from '../../repositories/levelPrismaRepository';
import { DeleteLevelUseCase } from './deleteLevelUseCase';
import { z } from 'zod';

export const createLevelBodySchema = z.object({
	id: z.string(),
});

export async function deleteLevelController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createLevelBodySchema.parse(request.params);

	const levelsRepository = new LevelsPrismaRepository()
	const deleteLevelUseCase = new DeleteLevelUseCase(levelsRepository)
	const level = await deleteLevelUseCase.execute({ id });

	if (level.isLeft())
		return reply
			.status(400)
			.send(level.value.error)

	return reply
		.status(201)
		.send(level.value.level);
}
