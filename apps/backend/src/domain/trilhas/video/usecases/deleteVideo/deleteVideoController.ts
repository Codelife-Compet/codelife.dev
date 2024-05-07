import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';
import { DeleteVideoUseCase } from './deleteVideoUseCase';

export const deleteVideoBodySchema = z.object({
	id: z.string()
});

export async function deleteController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteVideoBodySchema.parse(request.body);

    const videosRepository = new VideosPrismaRepository()
    const deleteVideoUseCase = new DeleteVideoUseCase(videosRepository)

	const video = await deleteVideoUseCase.execute({ id });

	if (video.isLeft())
		return reply
			.status(400)
			.send(video.value.error)

	return reply
		.status(201)
		.send(video.value.video);
}
