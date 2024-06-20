import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { UserCodesPrismaRepository } from '../../repositories/userCodesPrismaRepository';
import { CreateUserCodeUseCase } from './createUserCodeUseCase';

export const createUserCodeBodySchema = z.object({
	userName: z.string(),
	slideId: z.string(),
	code: z.string().optional() // TODO: criação de novo código pode criar vazio, caso usuario só abra a pagina
});

export async function createUserCodeController(request: FastifyRequest, reply: FastifyReply) {

	const { code, userName, slideId } = createUserCodeBodySchema.parse(request.body);

	const userCodesRepository = new UserCodesPrismaRepository()
    const createUserUseCase = new CreateUserCodeUseCase(userCodesRepository)

	const userCode = await createUserUseCase.execute({ code, userName, slideId });

	if (userCode.isLeft())
		return reply
			.status(400)
			.send(userCode.value.error)

	return reply
		.status(201)
		.send(userCode.value.usercode);
}
