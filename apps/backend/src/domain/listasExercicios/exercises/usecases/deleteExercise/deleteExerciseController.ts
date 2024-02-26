import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteExerciseUseCase } from './makeDeleteExerciseUseCase';

export const deleteLanguageExercisesListBodySchema = z.object({
	id: z.string(),
});

export async function deleteExerciseController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteLanguageExercisesListBodySchema.parse(request.body);

	const deleteExerciseUseCase = makeDeleteExerciseUseCase();

	const exercise = await deleteExerciseUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercise);
}
