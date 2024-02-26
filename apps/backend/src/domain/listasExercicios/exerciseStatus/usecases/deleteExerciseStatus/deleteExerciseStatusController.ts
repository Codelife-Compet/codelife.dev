import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeDeleteExerciseStatusUseCase } from './makeDeleteExerciseStatusUseCase';

export const deleteExerciseStatusBodySchema = z.object({
	id: z.string(),
});

export async function deleteExerciseStatusController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = deleteExerciseStatusBodySchema.parse(request.body);

	const deleteExerciseStatusUseCase = makeDeleteExerciseStatusUseCase();

	const exerciseStatus = await deleteExerciseStatusUseCase.execute({ id });

	if (exerciseStatus.isLeft()) {
		return reply
			.status(400)
			.send(exerciseStatus.value.error)
	}

	return reply.status(201).send(exerciseStatus.value.exerciseStatus);
}
