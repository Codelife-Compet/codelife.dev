import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateExerciseListUseCase } from './makeUpdateExercisesListUseCase';

export const updateLanguageExercisesListBodySchema = z.object({
	id: z.string(),
	topic: z.string().optional(),
	languageExercisesListId: z.string().optional(),
});

export async function updateExerciseListController(request: FastifyRequest, reply: FastifyReply) {

	const { languageExercisesListId, topic, id } = updateLanguageExercisesListBodySchema.parse(request.body);

	const updateExerciseUseCase = makeUpdateExerciseListUseCase();

	const exercise = await updateExerciseUseCase.execute({ languageExercisesListId, topic, id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercisesList);
}
