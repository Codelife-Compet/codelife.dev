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

    if (user.isLeft()) {
        return reply
            .status(400)
            .send({ error_message: user.value.message })
    }

    const tokenJwt = await reply.jwtSign(
        {
            role: user.value.user.role
        },
        {
            sign: {
                sub: user.value.user.id.toString()
            }
        });

    const refreshToken = await reply.jwtSign(
        {
            role: user.value.user.role,
        },
        {
            sign: {
                sub: user.value.user.id.toString(),
                expiresIn: '7d' // usuário só perde sua autenticação se ficar 7 dias sem entrar na aplicação
            }
        });

    return reply
        .status(201)
        .setCookie('refreshToken', refreshToken, {
            path: '/', // todo o backend pode ler o valor desse cookie
            secure: true, // cookie será encriptado por https (front nao tem acesso direto)
            sameSite: true, // só será acessível no mesmo site
            httpOnly: true // só sera acessaddo pelo backEnd
        })
        .send({ tokenJwt });

}
