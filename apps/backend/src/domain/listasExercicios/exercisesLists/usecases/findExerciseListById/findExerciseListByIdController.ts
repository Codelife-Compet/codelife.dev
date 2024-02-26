import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExercisesListByIdUseCase } from './makeFindExerciseListByIdUseCase';

export const findExercisesListByIdBodySchema = z.object({
	id: z.string(),
});

export async function findExercisesListByIdController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = findExercisesListByIdBodySchema.parse(request.params);

	const findExercisesListByIdUseCase = makeFindExercisesListByIdUseCase();

	const exercise = await findExercisesListByIdUseCase.execute({ id });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercisesList);
}
