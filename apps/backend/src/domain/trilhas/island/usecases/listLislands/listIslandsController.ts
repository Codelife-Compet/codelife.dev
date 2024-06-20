import { FastifyReply, FastifyRequest } from 'fastify';
import { IslandsPrismaRepository } from '../../repositories/islandPrismaRepository';
import { ListIslandsUseCase } from './listIslandsUseCase';

export async function listIslandsController(request: FastifyRequest, reply: FastifyReply) {

	const islandsRepository = new IslandsPrismaRepository()
    const listIslandsUseCase = new ListIslandsUseCase(islandsRepository)

	const island = await listIslandsUseCase.execute();

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.islands);
}
