import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UpdateSlideUseCase } from './updateSlideUseCase';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';

export const updateSlideParamsSchema = z.object({
	id: z.string(),
});

export const updateSlideBodySchema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	theme: z.string().optional(),
	baseCode: z.string().optional()
});

export async function updateSlideController(request: FastifyRequest, reply: FastifyReply) {

	const { description, name, theme, baseCode } = updateSlideBodySchema.parse(request.body);
	const { id } = updateSlideParamsSchema.parse(request.params);
	
    const slidesRepository = new SlidesPrismaRepository()
    const updateSlideUseCase = new UpdateSlideUseCase(slidesRepository)

	const slide = await updateSlideUseCase.execute({ id, description, name, theme, baseCode });

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slide);
}
