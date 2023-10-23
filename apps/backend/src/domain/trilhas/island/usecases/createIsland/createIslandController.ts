import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateIslandUseCase } from './makeCreateIslandUseCase';
import { createLevelBodySchema } from '@/domain/trilhas/level/usecases/createSlide/createLevelController';

export const createIslandBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	levels: z.array(createLevelBodySchema).optional()
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { description, levels, name, theme } = createIslandBodySchema.parse(request.body);

	const createIslandUseCase = makeCreateIslandUseCase();

	const island = await createIslandUseCase.execute({ description, name, theme });

	if (island.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: island.value.error.message })
	}

	return reply.status(201).send({ created_user: island.value });
}
