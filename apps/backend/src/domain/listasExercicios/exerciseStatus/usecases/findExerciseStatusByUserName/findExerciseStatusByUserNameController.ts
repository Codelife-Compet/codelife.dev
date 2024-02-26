import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindExerciseStatusByUserNameUseCase } from './makeFindExerciseStatusByUserNameUseCase';

export const findExerciseStatusByUserNameBodySchema = z.object({
	userName: z.string(),
});

export async function findExerciseStatusByUserNameController(request: FastifyRequest, reply: FastifyReply) {

	const { userName } = findExerciseStatusByUserNameBodySchema.parse(request.params);

	const findExerciseStatusByUserNameUseCase = makeFindExerciseStatusByUserNameUseCase();

	const exercise = await findExerciseStatusByUserNameUseCase.execute({ userName });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.exerciseStatus);
}
