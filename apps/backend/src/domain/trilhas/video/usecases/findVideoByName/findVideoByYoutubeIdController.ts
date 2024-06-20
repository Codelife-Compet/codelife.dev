import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';
import { FindVideoByYoutubeIdUseCase } from './findVideoByYoutubeIdUseCase';

export const findVideoBodySchema = z.object({
	slideId: z.string(),
	youtubeId: z.string(),
});

export async function findVideoByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { slideId, youtubeId } = findVideoBodySchema.parse(request.body);

	const videosRepository = new VideosPrismaRepository()
    const findVideoByNameUseCase = new FindVideoByYoutubeIdUseCase(videosRepository)

	const video = await findVideoByNameUseCase.execute({ slideId, youtubeId });

	if (video.isLeft())
		return reply
			.status(400)
			.send(video.value.error)

	return reply
		.status(201)
		.send(video.value.video);
}
