import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateInoutUseCase } from './makeUpdateInoutUseCase';

export const updateInoutBodySchema = z.object({
	id: z.string(),
	input: z.string().optional(),
	output: z.string().optional(),
});

export async function updateInoutController(request: FastifyRequest, reply: FastifyReply) {

	const { id, input, output } = updateInoutBodySchema.parse(request.body);

	const updateInoutUseCase = makeUpdateInoutUseCase();

	const inout = await updateInoutUseCase.execute({ id, input, output });

	if (inout.isLeft()) {
		return reply
			.status(400)
			.send(inout.value.error)
	}

	return reply.status(201).send(inout.value.inout);
}
