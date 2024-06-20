import { FastifyReply, FastifyRequest } from 'fastify';
import { ListLevelPonctuationsUseCase } from './listLevelPonctuationsUseCase';
import { z } from 'zod';
import { PonctuationsPrismaRepository } from '../../repositories/ponctuationPrismaRepository';

export const listLevelPonctuationsBodySchema = z.object({
	id: z.string(),
});

export async function listLevelPonctuationsController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listLevelPonctuationsBodySchema.parse(request.params);

	const ponctuationsRepository = new PonctuationsPrismaRepository()
    const listLevelPonctuationsUseCase = new ListLevelPonctuationsUseCase(ponctuationsRepository)

	const island = await listLevelPonctuationsUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.ponctuations);
}
