import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExerciseStatusByIdUseCase } from './makeFindExerciseStatusByIdUseCase';

export const findExerciseStatusByIdBodySchema = z.object({
	id: z.string(),
});

export async function findExerciseStatusByIdController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = findExerciseStatusByIdBodySchema.parse(request.params);

	const findExerciseStatusByIdUseCase = makeFindExerciseStatusByIdUseCase();

	const exercise = await findExerciseStatusByIdUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exerciseStatus);
}
