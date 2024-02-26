import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeUpdateExerciseStatusUseCase } from './makeUpdateExerciseStatusUseCase';

export const updateExerciseStatusBodySchema = z.object({
	id: z.string(),
	userName: z.string().optional(),
	status: z.string().optional(),
	exerciseId: z.string().optional(),
});

export async function updateExerciseStatusController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId, status, userName, id } = updateExerciseStatusBodySchema.parse(request.body);

	const updateExerciseStatusUseCase = makeUpdateExerciseStatusUseCase();

	const exerciseStatus = await updateExerciseStatusUseCase.execute({ exerciseId, status, userName, id });

	if (exerciseStatus.isLeft()) {
		return reply
			.status(400)
			.send(exerciseStatus.value.error)
	}

	return reply.status(201).send(exerciseStatus.value.exerciseStatus);
}
