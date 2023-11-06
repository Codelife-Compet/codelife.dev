import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeGetVideoLinkVideoUseCase } from './makeGetVideoLinkUseCase';

export const getvideolinkVideoBodySchema = z.object({
	slideId: z.string(),
});

export async function getvideolinkController(request: FastifyRequest, reply: FastifyReply) {

	const { slideId } = getvideolinkVideoBodySchema.parse(request.params);

	const getvideolinkVideoUseCase = makeGetVideoLinkVideoUseCase();

	const video = await getvideolinkVideoUseCase.execute({ slideId });

	if (video.isLeft()) {
		return reply
			.status(400)
			.send(video.value.error)
	}

	return reply.status(201).send(video.value.videoLink);
}
