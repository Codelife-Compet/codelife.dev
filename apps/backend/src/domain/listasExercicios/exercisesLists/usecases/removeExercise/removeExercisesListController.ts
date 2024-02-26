import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRemoveExerciseUseCase } from './makeRemoveExercisesListUseCase';

export const removeExerciseBodySchema = z.object({
	exerciseId: z.string(),
	exercisesListTopic: z.string()
});

export async function removeExerciseController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId, exercisesListTopic } = removeExerciseBodySchema.parse(request.body);

	const removeExerciseUseCase = makeRemoveExerciseUseCase();

	const exercisesList = await removeExerciseUseCase.execute({ exercisesListTopic, exerciseId });

	if (exercisesList.isLeft()) 
		return reply
			.code(400)
			.send(exercisesList.value.error)

	return reply
		.code(400)
		.send(exercisesList.value.exercises);
}
