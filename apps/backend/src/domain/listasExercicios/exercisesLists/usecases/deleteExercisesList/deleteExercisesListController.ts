import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteExercisesListUseCase } from './makeDeleteExercisesListUseCase';

export const deleteLanguageExercisesListBodySchema = z.object({
	id: z.string(),
});

export async function deleteExerciseListController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteLanguageExercisesListBodySchema.parse(request.body);

	const deleteExerciseUseCase = makeDeleteExercisesListUseCase();

	const exercise = await deleteExerciseUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercisesList);
}
