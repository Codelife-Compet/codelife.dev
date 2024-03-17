import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindInoutByIdUseCase } from './makeFindInoutByIdUseCase';

export const findInoutByIdBodySchema = z.object({
	id: z.string(),
});

export async function findInoutByIdController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = findInoutByIdBodySchema.parse(request.params);

	const findInoutByIdUseCase = makeFindInoutByIdUseCase();

	const exercise = await findInoutByIdUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.inout);
}
