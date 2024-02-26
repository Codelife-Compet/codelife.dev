import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRemoveExercisesListUseCase } from './makeRemoveExercisesListUseCase';

export const RemoveExercisesListBodySchema = z.object({
	exerciseslistId: z.string(),
	language: z.string()
});

export async function removeExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { language, exerciseslistId } = RemoveExercisesListBodySchema.parse(request.body);

	const RemoveExercisesListUseCase = makeRemoveExercisesListUseCase();

	const languageexerciseslist = await RemoveExercisesListUseCase.execute({ language, exerciseslistId });

	if (languageexerciseslist.isLeft())
		return reply
			.status(400)
			.send({ error_message: languageexerciseslist.value.error.message })

	return reply
		.status(201)
		.send(languageexerciseslist.value.exerciseslists);
}
