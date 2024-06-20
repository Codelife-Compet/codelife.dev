import { FastifyReply, FastifyRequest } from 'fastify';
import { TrailsPrismaRepository } from '../../repositories/trailPrismaRepository';
import { ListTrailsUseCase } from './listTrailsUseCase';

export async function listTrailsController(request: FastifyRequest, reply: FastifyReply) {

	const trailsRepository = new TrailsPrismaRepository()
    const listTrailsUseCase = new ListTrailsUseCase(trailsRepository)

	const trail = await listTrailsUseCase.execute();

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trails);
}
