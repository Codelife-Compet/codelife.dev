import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../video/usecases/createVideo/createVideoController';

export async function videoRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
}