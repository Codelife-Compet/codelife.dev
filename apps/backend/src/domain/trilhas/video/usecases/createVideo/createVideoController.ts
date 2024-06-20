import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';
import { CreateVideoUseCase } from './createVideoUseCase';

export const createVideoBodySchema = z.object({
	youtubeId: z.string(),
	slideId: z.string(),
	youtubePlaylistId: z.string().nullable(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { slideId, youtubeId, youtubePlaylistId } = createVideoBodySchema.parse(request.body);

    const videosRepository = new VideosPrismaRepository()
    const createVideoUseCase = new CreateVideoUseCase(videosRepository)

	const video = await createVideoUseCase.execute({ youtubeId, slideId, youtubePlaylistId });

	if (video.isLeft())
		return reply
			.status(400)
			.send(video.value.error)

	return reply
		.status(201)
		.send(video.value.video);
}
