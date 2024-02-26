import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../slides/usecases/createSlide/createSlideController';
import { getvideolinkController } from '../slides/usecases/getVideoLink/getVideoLinkController';

export async function slideRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
    app.get('/video/:slideId', getvideolinkController)
}