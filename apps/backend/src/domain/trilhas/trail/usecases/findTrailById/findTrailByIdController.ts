import { FastifyReply, FastifyRequest } from 'fastify';
import { TrailsPrismaRepository } from '../../repositories/trailPrismaRepository';
import { z } from 'zod';
import { FindTrailByIdUseCase } from './findTrailByIdUseCase';

export const createTrailBodySchema = z.object({
	id: z.string(),
});

export async function findTrailByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createTrailBodySchema.parse(request.params);

	const trailsRepository = new TrailsPrismaRepository()
    const findTrailByIdUseCase = new FindTrailByIdUseCase(trailsRepository)

	const trail = await findTrailByIdUseCase.execute({ id });

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trail);
}
