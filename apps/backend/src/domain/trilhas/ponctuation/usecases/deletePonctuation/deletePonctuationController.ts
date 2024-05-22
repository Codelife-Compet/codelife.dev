import { FastifyReply, FastifyRequest } from 'fastify';
import { PonctuationsPrismaRepository } from '../../repositories/ponctuationPrismaRepository';
import { DeletePonctuationUseCase } from './deletePonctuationUseCase';
import { z } from 'zod';

export const createPonctuationBodySchema = z.object({
	id: z.string(),
});

export async function deletePonctuationController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createPonctuationBodySchema.parse(request.params);

	const ponctuationsRepository = new PonctuationsPrismaRepository()
	const deletePonctuationUseCase = new DeletePonctuationUseCase(ponctuationsRepository)
	const ponctuation = await deletePonctuationUseCase.execute({ id });

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuation);
}
