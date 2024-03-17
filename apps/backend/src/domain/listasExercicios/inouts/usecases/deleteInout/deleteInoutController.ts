import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteInoutUseCase } from './makeDeleteInoutUseCase';

export const deleteInoutBodySchema = z.object({
	id: z.string(),
});

export async function deleteInoutController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteInoutBodySchema.parse(request.body);

	const deleteInoutUseCase = makeDeleteInoutUseCase();

	const inout = await deleteInoutUseCase.execute({ id });

	if (inout.isLeft()) {
		return reply
			.status(400)
			.send(inout.value.error)
	}

	return reply.status(201).send(inout.value.inout);
}
