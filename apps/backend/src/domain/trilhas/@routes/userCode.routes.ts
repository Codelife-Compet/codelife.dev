import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../user-codes/usecases/createUserCodes/createUserCodeController';

export async function userRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) // todas as rotas aqui presentes chamam a verificação 

    app.post('/create', createController)
}