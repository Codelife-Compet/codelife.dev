import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteSlideUseCase } from './deleteSlideUseCase';
import { z } from 'zod';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';

export const createSlideBodySchema = z.object({
	id: z.string(),
});

export async function deleteSlideController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createSlideBodySchema.parse(request.params);

	const slidesRepository = new SlidesPrismaRepository()
	const deleteSlideUseCase = new DeleteSlideUseCase(slidesRepository)
	const slide = await deleteSlideUseCase.execute({ id });

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slide);
}
