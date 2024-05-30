import { FastifyInstance } from 'fastify';
import { create } from './create';
import { login } from './login';
import { profile } from './profile';
import { refresh } from './refresh';
import { verifyJWT } from '../../middlewares/verify-jwt';
import { deleteController } from './delete';

export async function userRoutes(app: FastifyInstance) {
    app.post('/', create)
    app.post('/login', login)

	app.patch('/refresh', refresh); // atualiza o token
        // chamada pelo back quando o usuario perder sua autenticaçao (token invalido)

    app.get('/me', { onRequest: [verifyJWT] }, profile); 
    app.delete('/', { onRequest: [verifyJWT] }, deleteController); // deleta o usuario (soft delete
}