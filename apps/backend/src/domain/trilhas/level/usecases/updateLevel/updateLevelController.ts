import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { LevelsPrismaRepository } from '../../repositories/levelPrismaRepository';
import { UpdateLevelUseCase } from './updateLevelUseCase';

export const updateLevelParamsSchema = z.object({
	id: z.string(),
});

export const updateLevelBodySchema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	theme: z.string().optional(),
});

export async function updateLevelController(request: FastifyRequest, reply: FastifyReply) {

	const { description, name, theme } = updateLevelBodySchema.parse(request.body);
	const { id } = updateLevelParamsSchema.parse(request.params);
	
    const levelsRepository = new LevelsPrismaRepository()
    const updateLevelUseCase = new UpdateLevelUseCase(levelsRepository)

	const level = await updateLevelUseCase.execute({ id, description, name, theme });

	if (level.isLeft())
		return reply
			.status(400)
			.send(level.value.error)

	return reply
		.status(201)
		.send(level.value.level);
}
