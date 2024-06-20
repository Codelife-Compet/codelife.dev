import { FastifyReply, FastifyRequest } from 'fastify';
import { PonctuationsPrismaRepository } from '../../repositories/ponctuationPrismaRepository';
import { ListPonctuationsUseCase } from './listPonctuationUseCase';

export async function listPonctuationsController(request: FastifyRequest, reply: FastifyReply) {

	const ponctuationsRepository = new PonctuationsPrismaRepository()
    const listPonctuationsUseCase = new ListPonctuationsUseCase(ponctuationsRepository)

	const ponctuation = await listPonctuationsUseCase.execute();

	if (ponctuation.isLeft())
		return reply
			.status(400)
			.send(ponctuation.value.error)

	return reply
		.status(201)
		.send(ponctuation.value.ponctuations);
}
