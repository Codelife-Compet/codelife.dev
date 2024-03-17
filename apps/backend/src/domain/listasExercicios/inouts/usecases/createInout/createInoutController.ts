import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateInoutUseCase } from './makeCreateInoutUseCase';

export const createInoutBodySchema = z.object({
	exerciseId: z.string(),
	input: z.string(),
	output: z.string(),
});

export async function createInoutController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId, input, output } = createInoutBodySchema.parse(request.body);

	const createInoutUseCase = makeCreateInoutUseCase();

	const inout = await createInoutUseCase.execute({ exerciseId, input, output });

	if (inout.isLeft())
		return reply
			.status(400)
			.send(inout.value.error)

	return reply
		.status(201)
		.send(inout.value.inout);
}
