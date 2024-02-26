import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteLanguageExercisesListUseCase } from './makeDeleteLanguageExercisesListUseCase';

export const deleteLanguageExercisesListBodySchema = z.object({
	id: z.string(),
});

export async function deleteLanguageExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteLanguageExercisesListBodySchema.parse(request.body);

	const deleteLanguageExercisesListUseCase = makeDeleteLanguageExercisesListUseCase();

	const languageExercisesList = await deleteLanguageExercisesListUseCase.execute({ id });

	if (languageExercisesList.isLeft()) 
		return reply
			.status(400)
			.send(languageExercisesList.value.error)

	return reply
		.status(201)
		.send(languageExercisesList.value.languageExercisesList);
}
