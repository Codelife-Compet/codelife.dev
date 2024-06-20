import { PonctuationsPrismaRepository } from '@/domain/trilhas/ponctuation/repositories/ponctuationPrismaRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindPonctuationByIdUseCase } from './findPonctuationByIdUseCase';

export const findPonctuationBodySchema = z.object({
	id: z.string(),
});

export async function findPonctuationByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = findPonctuationBodySchema.parse(request.params);

	const ponctuationsRepository = new PonctuationsPrismaRepository()
    const findPonctuationByIdUseCase = new FindPonctuationByIdUseCase(ponctuationsRepository)

	const ponctuation = await findPonctuationByIdUseCase.execute({ id });

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuation);
}
