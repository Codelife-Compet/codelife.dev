import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../trail/usecases/createTrail/createTrailController';
import { listTrailsController } from '../trail/usecases/listTrails/listTrailsController';
import { findTrailByNameController } from '../trail/usecases/findTrailByName/findTrailByNameController';
import { findTrailByIdController } from '../trail/usecases/findTrailById/findTrailByIdController';
import { deleteTrailController } from '../trail/usecases/deleteTrail/deleteTrailController';
import { updateTrailController } from '../trail/usecases/updateTrail/updateTrailController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';

export async function trailRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createController)
    app.get('/list', listTrailsController)
    app.get('/id/:id', findTrailByIdController)
    app.get('/name/:name', findTrailByNameController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deleteTrailController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updateTrailController)
}