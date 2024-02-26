import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindLanguageExercisesListByLanguageUseCase } from './makeLanguageFindExerciseListByLanguageUseCase';

export const findLanguageExercisesListBylanguageBodySchema = z.object({
	language: z.string(),
});

export async function findLanguageExercisesListBylanguageController(request: FastifyRequest, reply: FastifyReply) {

	const { language } = findLanguageExercisesListBylanguageBodySchema.parse(request.params);

	const findLanguageExercisesListBylanguageUseCase = makeFindLanguageExercisesListByLanguageUseCase();

	const exercise = await findLanguageExercisesListBylanguageUseCase.execute({ language });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.languageExercisesList);
}
