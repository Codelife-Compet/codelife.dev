import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';
import { ListSlideUserCodesUseCase } from './listSlideUserCodesUseCase';

export const listSlideUserCodesBodySchema = z.object({
	id: z.string(),
});

export async function listSlideUserCodesController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listSlideUserCodesBodySchema.parse(request.params);

	const usercodesRepository = new UserCodesPrismaRepository()
    const listSlideUserCodesUseCase = new ListSlideUserCodesUseCase(usercodesRepository)

	const island = await listSlideUserCodesUseCase.execute({ id });

	if (island.isLeft())
		return reply
			.status(400)
			.send(island.value.error)

	return reply
		.status(201)
		.send(island.value.usercodes);
}
