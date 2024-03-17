import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFindInoutByExerciseIdUseCase } from './makeFindInoutByExerciseIdUseCase';

export const findInoutByUserNameBodySchema = z.object({
	exerciseId: z.string(),
});

export async function findInoutByUserNameController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseId } = findInoutByUserNameBodySchema.parse(request.params);

	const findInoutByUserNameUseCase = makeFindInoutByExerciseIdUseCase();

	const exercise = await findInoutByUserNameUseCase.execute({ exerciseId });

	if (exercise.isLeft())
		return reply
			.status(400)
			.send(exercise.value.error)

	return reply
		.status(201)
		.send(exercise.value.inout);
}
