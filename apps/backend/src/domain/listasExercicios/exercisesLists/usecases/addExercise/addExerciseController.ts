import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAddExerciseUseCase } from './makeAddExerciseUseCase';

export const addExerciseBodySchema = z.object({
	exerciseTopic: z.string(),
	exerciseId: z.string()
});

export async function addExerciseController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId, exerciseTopic } = addExerciseBodySchema.parse(request.body);

	const addExerciseUseCase = makeAddExerciseUseCase();

	const exercise = await addExerciseUseCase.execute({ exerciseId, exerciseTopic });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercises);
}
