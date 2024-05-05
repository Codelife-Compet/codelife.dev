import { FastifyReply, FastifyRequest } from 'fastify';
import { TrailsPrismaRepository } from '../../repositories/trailPrismaRepository';
import { FindTrailByNameUseCase } from './findTrailByNameUseCase';
import { z } from 'zod';

export const createTrailBodySchema = z.object({
	name: z.string(),
});

export async function findTrailByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { name } = createTrailBodySchema.parse(request.params);

	const trailsRepository = new TrailsPrismaRepository()
    const findTrailByNameUseCase = new FindTrailByNameUseCase(trailsRepository)

	const trail = await findTrailByNameUseCase.execute({ name });

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trail);
}
