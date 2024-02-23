import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUploadVideoUseCase } from './makeUploadVideoUseCase';

const videoBodySchema = z.object({
	vtitle: z.string(),
	vdescription: z.string(),
	vprivacyStatus: z.string(),
	file: z.string()
});

const playlistBodySchema = z.object({
	ptitle: z.string(),
	pdescription: z.string(),
	pprivacyStatus: z.string()
});

export const uploadVideoBodySchema = z.object({
	video: videoBodySchema,
	playlist: playlistBodySchema,
    slideId: z.string()
});

export async function uploadController(request: FastifyRequest, reply: FastifyReply) {

	const { playlist, slideId, video } = uploadVideoBodySchema.parse(request.body);

	const uploadVideoUseCase = makeUploadVideoUseCase()
	const response = await uploadVideoUseCase.execute({ playlist, slideId, video });
	if (response.isLeft()) 
		return reply
			.status(400)
			.send(response.value.error)

	return reply
		.status(201)
		.send(response.value.video);
}
