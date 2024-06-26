import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';
import { CreateSlideUseCase } from './createSlideUseCase';

export const createSlideBodySchema = z.object({
	name: z.string(),
	description: z.string(),
	theme: z.string(),
	baseCode: z.string(), // linhas de código base para aquela atividade
	levelId: z.string()
});

export async function createSlideController(request: FastifyRequest, reply: FastifyReply) {

	const { baseCode, description, levelId, name, theme } = createSlideBodySchema.parse(request.body);

    const slidesRepository = new SlidesPrismaRepository()
    const createSlideUseCase = new CreateSlideUseCase(slidesRepository)
	const slide = await createSlideUseCase.execute({ baseCode, description, levelId, name, theme });

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slide);
}
