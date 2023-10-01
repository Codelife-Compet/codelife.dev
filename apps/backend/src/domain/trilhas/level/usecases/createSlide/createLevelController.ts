import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateLevelUseCase } from './makeCreateLevelUseCase';
import { createSlideBodySchema } from '@/domain/trilhas/slides/usecases/createSlide/createSlideController';

export const createLevelBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	slides: z.array(createSlideBodySchema).optional(),
	islandId: z.string()
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { description, islandId, name, theme, slides } = createLevelBodySchema.parse(request.body);

	const createLevelUseCase = makeCreateLevelUseCase();

	const level = await createLevelUseCase.execute({ description, islandId, name, theme });

	if (level.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: level.value.error.message })
	}

	return reply.status(201).send({ created_user: level.value });
}
