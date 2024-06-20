import { FastifyReply, FastifyRequest } from 'fastify';
import { TrailsPrismaRepository } from '../../repositories/trailPrismaRepository';
import { DeleteTrailUseCase } from './deleteTrailUseCase';
import { z } from 'zod';

export const createTrailBodySchema = z.object({
	id: z.string(),
});

export async function deleteTrailController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createTrailBodySchema.parse(request.params);

	const trailsRepository = new TrailsPrismaRepository()
	const deleteTrailUseCase = new DeleteTrailUseCase(trailsRepository)
	const trail = await deleteTrailUseCase.execute({ id });

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trail);
}
