import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExerciseByIdUseCase } from './makeFindExerciseByIdUseCase';

export const findExerciseByIdBodySchema = z.object({
	id: z.string(),
});

export async function findExerciseByIdController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = findExerciseByIdBodySchema.parse(request.params);

	const findExerciseByIdUseCase = makeFindExerciseByIdUseCase();

	const exercise = await findExerciseByIdUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercise);
}
