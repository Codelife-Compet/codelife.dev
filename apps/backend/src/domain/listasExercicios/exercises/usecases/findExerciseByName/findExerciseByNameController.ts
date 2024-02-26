import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExerciseByNameUseCase } from './makeFindExerciseByNameUseCase';

export const findExerciseByNameBodySchema = z.object({
	name: z.string(),
});

export async function findExerciseByNameController(request: FastifyRequest, reply: FastifyReply) {

	const { name } = findExerciseByNameBodySchema.parse(request.params);

	const findExerciseByNameUseCase = makeFindExerciseByNameUseCase();

	const exercise = await findExerciseByNameUseCase.execute({ name });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercise);
}
