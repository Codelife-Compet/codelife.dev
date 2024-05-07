import { FastifyReply, FastifyRequest } from 'fastify';
import { ListSlidesUseCase } from './listSlidesUseCase';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';

export async function listSlidesController(request: FastifyRequest, reply: FastifyReply) {

	const slidesRepository = new SlidesPrismaRepository()
    const listSlidesUseCase = new ListSlidesUseCase(slidesRepository)

	const slide = await listSlidesUseCase.execute();

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.slides);
}
