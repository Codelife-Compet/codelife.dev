import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateUserCodeUseCase } from './makeCreateUserCodesUseCase';

export const createUserCodeBodySchema = z.object({
	userName: z.string(),
	slideId: z.string(),
	code: z.string().optional() // TODO: criação de novo código pode criar vazio, caso usuario só abra a pagina
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { code, userName, slideId } = createUserCodeBodySchema.parse(request.body);

	const createUserUseCase = makeCreateUserCodeUseCase();

	const userCode = await createUserUseCase.execute({ code, userName, slideId });

	if (userCode.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: userCode.value.error.message })
	}

	return reply.status(201).send({ created_user: userCode.value });
}
