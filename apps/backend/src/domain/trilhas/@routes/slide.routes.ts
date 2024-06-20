import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createSlideController } from '../slides/usecases/createSlide/createSlideController';
import { listSlidesController } from '../slides/usecases/listSlides/listSlidesController';
import { findSlideByIdController } from '../slides/usecases/findSlideById/findSlideByIdController';
import { findSlideByNameController } from '../slides/usecases/findSlideByName/findSlideByNameController';
import { updateSlideController } from '../slides/usecases/updateSlide/updateSlideController';
import { deleteSlideController } from '../slides/usecases/deleteSlide/deleteSlideController';
import { listLevelSlidesController } from '../slides/usecases/listLevelSlides/listLevelSlidesController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';

export async function slideRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createSlideController)
    app.get('/list', listSlidesController)
    app.get('/list/:id', listLevelSlidesController)
    app.get('/id/:id', findSlideByIdController)
    app.get('/name/:name', findSlideByNameController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updateSlideController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deleteSlideController)
}