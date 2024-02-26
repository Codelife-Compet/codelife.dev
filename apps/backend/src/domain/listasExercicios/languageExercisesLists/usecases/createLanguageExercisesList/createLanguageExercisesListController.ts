import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateLanguageExercisesListUseCase } from './makeCreateLanguageExercisesListUseCase';

export const createLanguageExercisesListBodySchema = z.object({
    language: z.string()
});

export async function createLanguageExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { language } = createLanguageExercisesListBodySchema.parse(request.body);

	const createLanguageExercisesListUseCase = makeCreateLanguageExercisesListUseCase();

	const languageExercisesList = await createLanguageExercisesListUseCase.execute({ language });

	if (languageExercisesList.isLeft()) 
		return reply
			.status(400)
			.send(languageExercisesList.value.error)

	return reply
		.status(201)
		.send(languageExercisesList.value.languageExercisesList);
}
