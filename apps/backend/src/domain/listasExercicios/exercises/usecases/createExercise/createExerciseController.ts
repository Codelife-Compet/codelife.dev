import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateExerciseUseCase } from './makeCreateExerciseUseCase';

export const createLanguageExercisesListBodySchema = z.object({
	link: z.string(),
	name: z.string(),
	difficulty: z.string(),
	exercisesListId: z.string(),
	description: z.string(),
});

export async function createExerciseController(request: FastifyRequest, reply: FastifyReply) {

	const { difficulty, exercisesListId, link, name, description } = createLanguageExercisesListBodySchema.parse(request.body);

	const createExerciseUseCase = makeCreateExerciseUseCase();

	const exercise = await createExerciseUseCase.execute({ difficulty, exercisesListId, link, name, description });

	if (exercise.isLeft()) 
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercise);
}
