import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateExerciseListUseCase } from './makeCreateExercisesListUseCase';

export const createLanguageExercisesListBodySchema = z.object({
	topic: z.string(),
	languageExercisesListId: z.string(),
});

export async function createExerciseListController(request: FastifyRequest, reply: FastifyReply) {

	const { languageExercisesListId, topic } = createLanguageExercisesListBodySchema.parse(request.body);

	const createExerciseUseCase = makeCreateExerciseListUseCase();

	const exercise = await createExerciseUseCase.execute({ languageExercisesListId, topic });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercisesList);
}
