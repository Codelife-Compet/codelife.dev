import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UpdateVideoUseCase } from './updateVideoUseCase';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';

export const updateVideoParamsSchema = z.object({
	id: z.string(),
});

export const updateVideoBodySchema = z.object({
	youtubeId: z.string().optional(),
	youtubePlaylistId: z.string().optional(),
});

export async function updateVideoController(request: FastifyRequest, reply: FastifyReply) {

	const data = updateVideoBodySchema.parse(request.body);
	const { id } = updateVideoParamsSchema.parse(request.params);
	
    const videosRepository = new VideosPrismaRepository()
    const updateVideoUseCase = new UpdateVideoUseCase(videosRepository)

	const video = await updateVideoUseCase.execute({ id, data});

	if (video.isLeft())
		return reply
			.status(400)
			.send(video.value.error)

	return reply
		.status(201)
		.send(video.value.video);
}
