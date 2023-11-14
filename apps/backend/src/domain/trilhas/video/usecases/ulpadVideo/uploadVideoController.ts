import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUploadVideoUseCase } from './makeUploadVideoUseCase';

export const uploadVideoBodySchema = z.object({
	directory: z.string()
});

export async function uploadController(request: FastifyRequest, reply: FastifyReply) {

	const { directory } = uploadVideoBodySchema.parse(request.body);

	const uploadVideoUseCase = makeUploadVideoUseCase();

	const video = await uploadVideoUseCase.execute({ directory });

	if (video.isLeft()) {
		return reply
			.status(400)
			.send(video.value.error)
	}

	return reply.status(201).send(video.value.success);
}
