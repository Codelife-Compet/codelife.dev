import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateExerciseStatusUseCase } from './makeCreateExerciseStatusUseCase';

export const createExerciseStatusBodySchema = z.object({
    userName: z.string(),
    status: z.string(),
    exerciseId: z.string(),
});

export async function createExerciseStatusController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId, status, userName } = createExerciseStatusBodySchema.parse(request.body);

	const createExerciseStatusUseCase = makeCreateExerciseStatusUseCase();

	const exerciseStatus = await createExerciseStatusUseCase.execute({ exerciseId, status, userName });

	if (exerciseStatus.isLeft())
		return reply
			.status(400)
			.send(exerciseStatus.value.error)

	return reply
		.status(201)
		.send(exerciseStatus.value.exerciseStatus);
}
