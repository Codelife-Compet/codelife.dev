import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';
import { FindSlideByNameUseCase } from './findSlideBySlideName&LevelIdUseCase';

export const findSlideBodySchema = z.object({
	slideName: z.string(),
	levelId: z.string(),
});

export async function findSlideByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { slideName, levelId } = findSlideBodySchema.parse(request.body);

	const slidesRepository = new SlidesPrismaRepository()
    const findSlideByNameUseCase = new FindSlideByNameUseCase(slidesRepository)

	const slide = await findSlideByNameUseCase.execute({ slideName, levelId });

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slide);
}
