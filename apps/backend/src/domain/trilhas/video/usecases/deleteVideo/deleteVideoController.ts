import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteVideoUseCase } from './makeDeleteVideoUseCase';

export const deleteVideoBodySchema = z.object({
	directory: z.string()
});

export async function deleteController(request: FastifyRequest, reply: FastifyReply) {

	const { directory } = deleteVideoBodySchema.parse(request.body);

	const deleteVideoUseCase = makeDeleteVideoUseCase();

	const video = await deleteVideoUseCase.execute({ directory });

	if (video.isLeft()) {
		return reply
			.status(400)
			.send(video.value.error)
	}

	return reply.status(201).send(video.value.success);
}
