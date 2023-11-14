import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../video/usecases/createVideo/createVideoController';
import { uploadController } from '../video/usecases/ulpadVideo/uploadVideoController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { deleteController } from '../video/usecases/deleteVideo/deleteVideoController';

export async function videoRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
    app.post('/upload', { onRequest: [verifyUserRole('ADMIN')] }, uploadController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteController)
}