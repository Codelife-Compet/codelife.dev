import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAddExercisesListUseCase } from './makeAddExerciseListUseCase';

export const addexerciseslisttoLanguageExercisesListBodySchema = z.object({
	exercisesListId: z.string(),
	languageExercisesListLanguage: z.string()
});

export async function addExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { languageExercisesListLanguage, exercisesListId } = addexerciseslisttoLanguageExercisesListBodySchema.parse(request.body);

	const addexerciseslisttoLanguageExercisesListUseCase = makeAddExercisesListUseCase();

	const languageexerciseslist = await addexerciseslisttoLanguageExercisesListUseCase.execute({ languageExercisesListLanguage, exercisesListId });

	if (languageexerciseslist.isLeft()) 
		return reply
			.status(400)
			.send({ error_message: languageexerciseslist.value.error.message })

	return reply
		.status(201)
		.send(languageexerciseslist.value.exercisesLists);
}
