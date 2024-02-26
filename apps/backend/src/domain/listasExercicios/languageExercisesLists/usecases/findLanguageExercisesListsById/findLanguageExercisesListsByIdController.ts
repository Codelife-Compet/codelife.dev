import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindLanguageExercisesListByIdUseCase } from './makeFindLanguageExercisesListsByIdUseCase';

export const findLanguageExercisesListByIdBodySchema = z.object({
	id: z.string(),
});

export async function findLanguageExercisesListByIdController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = findLanguageExercisesListByIdBodySchema.parse(request.params);

	const findLanguageExercisesListByIdUseCase = makeFindLanguageExercisesListByIdUseCase();

	const exercise = await findLanguageExercisesListByIdUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.languageExercisesList);
}
