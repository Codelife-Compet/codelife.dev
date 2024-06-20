import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';
import { FindVideoByIdUseCase } from './findVideoByIdUseCase';

export const findVideoBodySchema = z.object({
	id: z.string(),
});

export async function findVideoByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = findVideoBodySchema.parse(request.params);

	const videosRepository = new VideosPrismaRepository()
    const findVideoByIdUseCase = new FindVideoByIdUseCase(videosRepository)

	const video = await findVideoByIdUseCase.execute({ id });

	if (video.isLeft())
		return reply
			.status(400)
			.send(video.value.error)

	return reply
		.status(201)
		.send(video.value.video);
}
