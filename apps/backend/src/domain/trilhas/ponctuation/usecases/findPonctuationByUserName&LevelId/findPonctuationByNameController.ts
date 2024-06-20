import { PonctuationsPrismaRepository } from '@/domain/trilhas/ponctuation/repositories/ponctuationPrismaRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FindPonctuationByNameUseCase } from './findPonctuationByNameUseCase';

export const findPonctuationBodySchema = z.object({
	levelId: z.string(),
	userName: z.string(),
});

export async function findPonctuationByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { levelId, userName } = findPonctuationBodySchema.parse(request.body);

	const ponctuationsRepository = new PonctuationsPrismaRepository()
    const findPonctuationByNameUseCase = new FindPonctuationByNameUseCase(ponctuationsRepository)

	const ponctuation = await findPonctuationByNameUseCase.execute({ levelId, userName });

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuation);
}
