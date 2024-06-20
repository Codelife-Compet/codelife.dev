import { FastifyReply, FastifyRequest } from 'fastify';
import { ListUserCodesUseCase } from './listUserCodesUseCase';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';

export async function listUserCodesController(request: FastifyRequest, reply: FastifyReply) {

	const usercodesRepository = new UserCodesPrismaRepository()
    const listUserCodesUseCase = new ListUserCodesUseCase(usercodesRepository)

	const slide = await listUserCodesUseCase.execute();

	if (slide.isLeft())
		return reply
			.status(400)
			.send(slide.value.error)

	return reply
		.status(201)
		.send(slide.value.usercodes);
}
