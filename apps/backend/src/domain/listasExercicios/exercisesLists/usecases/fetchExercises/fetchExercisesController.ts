import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFetchExercisesUseCase } from './makeFetchExercisesUseCase';

export const fetchExercisesBodySchema = z.object({
	id: z.string(),
});

export async function fetchExercisesController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = fetchExercisesBodySchema.parse(request.body);

	const updateExerciseUseCase = makeFetchExercisesUseCase();

	const exercise = await updateExerciseUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercises);
}
