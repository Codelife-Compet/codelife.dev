import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateVideoUseCase } from './makeCreateVideoUseCase';

export const createVideoBodySchema = z.object({
	youtubeId: z.string(),
	slideId: z.string(),
	youtubePlaylistId: z.string().nullable(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { slideId, youtubeId, youtubePlaylistId } = createVideoBodySchema.parse(request.body);

	const createVideoUseCase = makeCreateVideoUseCase();

	const video = await createVideoUseCase.execute({ youtubeId, slideId, youtubePlaylistId });

	if (video.isLeft()) {
		return reply
			.status(400)
			.send(video.value.error)
	}

	return reply.status(201).send(video.value.video);
}
