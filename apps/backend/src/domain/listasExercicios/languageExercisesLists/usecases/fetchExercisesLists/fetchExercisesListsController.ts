import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFetchExercisesUseCase } from './makeFetchExercisesListsUseCase';

export const fetchExercisesBodySchema = z.object({
	id: z.string(),
});

export async function fetchExercisesListController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = fetchExercisesBodySchema.parse(request.body);

	const fetchExercisesUseCase = makeFetchExercisesUseCase();

	const languageExercisesList = await fetchExercisesUseCase.execute({ id });

	if (languageExercisesList.isLeft()) 
		return reply
			.status(400)
			.send(languageExercisesList.value.error)

	return reply
		.status(201)
		.send(languageExercisesList.value.exercisesLists);
}
