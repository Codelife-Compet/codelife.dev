import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRemoveExerciseStatus } from './makeRemoveExerciseStatusUseCase';

export const removeExerciseStatusBodySchema = z.object({
	exerciseStatusId: z.string(),
	exerciseName: z.string()
});

export async function removeExerciseStatusController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseName, exerciseStatusId } = removeExerciseStatusBodySchema.parse(request.body);

	const removeExerciseStatusUseCase = makeRemoveExerciseStatus();

	const exerciseStatus = await removeExerciseStatusUseCase.execute({ exerciseName, exerciseStatusId });

	if (exerciseStatus.isLeft()) 
		return reply
			.status(400)
			.send(exerciseStatus.value.error)

	return reply
		.status(201)
		.send(exerciseStatus.value.exerciseStatus);
}
