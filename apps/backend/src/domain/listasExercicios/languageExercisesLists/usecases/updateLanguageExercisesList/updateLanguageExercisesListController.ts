import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateLanguageExercisesListUseCase } from './makeUpdateLanguageExercisesListUseCase';

export const updateLanguageExercisesListBodySchema = z.object({
	id: z.string(),
    language: z.string().optional(),
});

export async function updateLanguageExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { language, id } = updateLanguageExercisesListBodySchema.parse(request.body);

	const updateLanguageExercisesListUseCase = makeUpdateLanguageExercisesListUseCase();

	const languageExercisesList = await updateLanguageExercisesListUseCase.execute({ language, id });

	if (languageExercisesList.isLeft()) 
		return reply
			.status(400)
			.send(languageExercisesList.value.error)

	return reply
		.status(201)
		.send(languageExercisesList.value.languageExercisesList);
}
