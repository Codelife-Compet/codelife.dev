import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateExerciseUseCase } from './makeUpdateExerciseUseCase';

export const updateLanguageExercisesListBodySchema = z.object({
	id: z.string(),
	link: z.string().optional(),
	name: z.string().optional(),
	difficulty: z.string().optional(),
	exercisesListId: z.string().optional(),
	description: z.string().optional(),
});

export async function updateExerciseController(request: FastifyRequest, reply: FastifyReply) {

	const { difficulty, exercisesListId, link, name, id, description } = updateLanguageExercisesListBodySchema.parse(request.body);

	const updateExerciseUseCase = makeUpdateExerciseUseCase();

	const exercise = await updateExerciseUseCase.execute({ difficulty, exercisesListId, link, name, id, description });

	if (exercise.isLeft()) 
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercise);
}
