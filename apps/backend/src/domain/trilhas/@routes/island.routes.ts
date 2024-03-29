import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../island/usecases/createIsland/createIslandController';

export async function islandRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) // todas as rotas aqui presentes chamam a verificação 

    app.post('/create', createController)
}