import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindSlideByIdUseCase } from './findSlideByIdUseCase';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';

export const findSlideBodySchema = z.object({
	id: z.string(),
});

export async function findSlideByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = findSlideBodySchema.parse(request.params);

	const slidesRepository = new SlidesPrismaRepository()
    const findSlideByIdUseCase = new FindSlideByIdUseCase(slidesRepository)

	const slide = await findSlideByIdUseCase.execute({ id });

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slide);
}
