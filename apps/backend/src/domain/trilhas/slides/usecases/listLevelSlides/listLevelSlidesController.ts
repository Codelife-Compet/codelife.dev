import { FastifyReply, FastifyRequest } from 'fastify';
import { ListLevelSlidesUseCase } from './listLevelSlidesUseCase';
import { z } from 'zod';
import { SlidesPrismaRepository } from '../../repositories/slidesPrismaRepository';

export const listLevelSlidesBodySchema = z.object({
	id: z.string(),
});

export async function listLevelSlidesController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listLevelSlidesBodySchema.parse(request.params);

	const slidesRepository = new SlidesPrismaRepository()
    const listLevelSlidesUseCase = new ListLevelSlidesUseCase(slidesRepository)

	const island = await listLevelSlidesUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.slides);
}
