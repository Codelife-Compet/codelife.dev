import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExerciseListByTopicUseCase } from './makeFindExerciseListByTopicUseCase';

export const findExercisesListByTopicBodySchema = z.object({
	topic: z.string(),
});

export async function findExercisesListByTopicController(request: FastifyRequest, reply: FastifyReply) {

	const { topic } = findExercisesListByTopicBodySchema.parse(request.params);

	const findExercisesListByTopicUseCase = makeFindExerciseListByTopicUseCase();

	const exercise = await findExercisesListByTopicUseCase.execute({ topic });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exercisesList);
}
