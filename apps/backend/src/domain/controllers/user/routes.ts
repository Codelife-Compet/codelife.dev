import { FastifyInstance } from 'fastify';
import { create } from './create';
import { login } from './login';
import { verifyJWT } from '@/domain/middlewares/verify-jwt';
import { profile } from './profile';
import { refresh } from './refresh';

export async function userRoutes(app: FastifyInstance) {
    app.post('/create', create)
    app.post('/login', login)

	app.patch('/token/refresh', refresh); // atualiza o token
        // chamada pelo back quando o usuario perder sua autenticaçao (token invalido)

    app.get('/me', { onRequest: [verifyJWT] }, profile); // passa request e reply pro verify, e test  a
}