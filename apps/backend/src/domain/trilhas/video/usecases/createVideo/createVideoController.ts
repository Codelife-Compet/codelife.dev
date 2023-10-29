import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateVideoUseCase } from './makeCreateVideoUseCase';

export const createVideoBodySchema = z.object({
	distributionName: z.string(),
	slideId: z.string(),
	videoKey: z.string(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { distributionName, slideId, videoKey } = createVideoBodySchema.parse(request.body);

	const createVideoUseCase = makeCreateVideoUseCase();

	const video = await createVideoUseCase.execute({ distributionName, slideId, videoKey, });

	if (video.isLeft()) {
		return reply
			.status(400)
			.send(video.value.error)
	}

	return reply.status(201).send(video.value.video);
}
