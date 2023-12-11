import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UploadVideoUseCase } from './uploadVideoUseCase';
import { VideosPrismaRepository } from '../../repositories/videosPrismaRepository';
import { makeUploadVideoUseCase } from './makeUploadVideoUseCase';

export const uploadVideoBodySchema = z.object({
	directory: z.string()
});

export async function uploadController(request: FastifyRequest, reply: FastifyReply) {

	// const { directory } = uploadVideoBodySchema.parse(request.body);

	// const uploadVideoUseCase = makeUploadVideoUseCase();

	const uploadVideoUseCase = makeUploadVideoUseCase()

	const response = await uploadVideoUseCase.execute({ directory: "teste" });
	if (response.isLeft()) {
		return reply
			.status(400)
			.send(response.value.error)
	}

	return reply.status(201).send(response.value.videoID);

	
	//const video = await uploadVideoUseCase.execute({ directory });
//
	//if (video.isLeft()) {
	//	return reply
	//		.status(400)
	//		.send(video.value.error)
	//}
//
	//return reply.status(201).send(video.value.success);
}
