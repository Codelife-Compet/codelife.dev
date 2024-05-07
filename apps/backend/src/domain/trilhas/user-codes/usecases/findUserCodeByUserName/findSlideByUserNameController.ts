import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';
import { FindUserCodeByUserNameUseCase } from './findUserCodeByUserNameUseCase';

export const findUserCodeBodySchema = z.object({
	userName: z.string(),
	slideId: z.string(),
});

export async function findUserCodeByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { userName, slideId } = findUserCodeBodySchema.parse(request.body);

	const usercodesRepository = new UserCodesPrismaRepository()
    const findUserCodeByNameUseCase = new FindUserCodeByUserNameUseCase(usercodesRepository)

	const usercode = await findUserCodeByNameUseCase.execute({ userName, slideId });

	if (usercode.isLeft())
		return reply
			.status(400)
			.send(usercode.value)

	return reply
		.status(201)
		.send(usercode.value.userCode);
}
