import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { TrailsPrismaRepository } from '../../repositories/trailPrismaRepository';
import { UpdateTrailUseCase } from './updateTrailUseCase';

export const updateTrailParamsSchema = z.object({
	id: z.string(),
});

export const updateTrailBodySchema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	theme: z.string().optional(),
});

export async function updateTrailController(request: FastifyRequest, reply: FastifyReply) {

	const { description, name, theme } = updateTrailBodySchema.parse(request.body);
	const { id } = updateTrailParamsSchema.parse(request.params);
	
    const trailsRepository = new TrailsPrismaRepository()
    const updateTrailUseCase = new UpdateTrailUseCase(trailsRepository)

	const trail = await updateTrailUseCase.execute({ id, description, name, theme });

	if (trail.isLeft())
		return reply
			.status(400)
			.send(trail.value.error)

	return reply
		.status(201)
		.send(trail.value.trail);
}
