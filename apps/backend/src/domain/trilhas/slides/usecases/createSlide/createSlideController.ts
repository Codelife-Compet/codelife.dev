import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateSlideUseCase } from './makeCreateSlideUseCase';
import { createUserCodeBodySchema } from '@/domain/trilhas/user-codes/usecases/createUserCodes/createUserCodeController';

export const createSlideBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	baseCode: z.string(), // linhas de código base para aquela atividade
	userCodes: z.array(createUserCodeBodySchema).optional(), // código previamente digitado pelo usuário
	// video: z.string(),
	levelId: z.string()
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { baseCode, description, levelId, name, theme, userCodes } = createSlideBodySchema.parse(request.body);

	const createSlideUseCase = makeCreateSlideUseCase();

	const slide = await createSlideUseCase.execute({ baseCode, description, levelId, name, theme });

	if (slide.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: slide.value.error.message })
	}

	return reply.status(201).send({ created_user: slide.value });
}
