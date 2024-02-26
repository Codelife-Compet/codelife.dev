import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAddExerciseStatusUseCase } from './makeAddExerciseStatusUseCase';

export const addExerciseStatusBodySchema = z.object({
	exerciseName: z.string(),
	exerciseStatusId: z.string()
});

export async function addExerciseStatusController(request: FastifyRequest, reply: FastifyReply) {

	const { exerciseName, exerciseStatusId } = addExerciseStatusBodySchema.parse(request.body);

	const addExerciseStatusUseCase = makeAddExerciseStatusUseCase();

	const languageexerciseslist = await addExerciseStatusUseCase.execute({ exerciseName, exerciseStatusId });

	if (languageexerciseslist.isLeft()) 
		return reply
			.status(400)
			.send({ error_message: languageexerciseslist.value.error.message })

	return reply
		.status(201)
		.send(languageexerciseslist.value.exerciseslists);
}
