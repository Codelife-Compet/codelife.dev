import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreatePonctuationUseCase } from './makeCreatePonctuationUseCase';
import { createSlideBodySchema } from '@/domain/trilhas/slides/usecases/createSlide/createSlideController';

export const createPonctuationBodySchema = z.object({
	userName: z.string(),
	score: z.number(),
	levelId: z.string(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { levelId, score, userName } = createPonctuationBodySchema.parse(request.body);

	const createPonctuationUseCase = makeCreatePonctuationUseCase();

	const ponctuation = await createPonctuationUseCase.execute({ levelId, score, userName });

	if (ponctuation.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: ponctuation.value.error.message })
	}

	return reply.status(201).send({ created_user: ponctuation.value });
}
