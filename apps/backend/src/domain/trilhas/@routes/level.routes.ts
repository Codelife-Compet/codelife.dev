import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../level/usecases/createSlide/createLevelController';

export async function levelRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
}