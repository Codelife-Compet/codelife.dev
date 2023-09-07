import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error';
import { makeLoginUserUseCase } from '@/domain/usecases/factories/make-login-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export const loginUserBodySchema = z.object({
    type: z.enum(['email', 'github', 'google', 'facebook']),
    token: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
});

export async function login(request: FastifyRequest, reply: FastifyReply) {

    const { email, type, token, password } = loginUserBodySchema.parse(request.body);
    const loginUserUseCase = makeLoginUserUseCase();

    if ((type === 'email' && !(email && password)) || (!(type === 'email')) && !token)
        return reply
            .status(400)
            .send({ error_message: "As informações de login não foram passadas propriamente." })

    const user = await loginUserUseCase.execute({ token, type, email, password })

    if (user.isLeft() && user.value instanceof ResourceNotFoundError) {
        return reply
            .status(400)
            .send({ error_message: user.value.message })
    }

    return reply
        .status(201)
        .send({ logind_user: user.value });

}
