import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../video/usecases/createVideo/createVideoController';
import { uploadController } from '../video/usecases/ulpadVideo/uploadVideoController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { deleteController } from '../video/usecases/deleteVideo/deleteVideoController';
import { findVideoByIdController } from '../video/usecases/findVideoById/findVideoByIdController';
import { findSlideByNameController } from '../slides/usecases/findSlideByName/findSlideByNameController';

export async function videoRoutes(app: FastifyInstance) {
    // app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
    app.get('/id/:id', findVideoByIdController)
    app.get('/name/:name', findSlideByNameController)
    app.post('/upload', { onRequest: [verifyUserRole('ADMIN')] }, uploadController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteController)
}