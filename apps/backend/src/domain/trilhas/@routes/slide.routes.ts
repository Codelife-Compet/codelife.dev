import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createSlideController } from '../slides/usecases/createSlide/createSlideController';
import { listSlidesController } from '../slides/usecases/listSlides/listSlidesController';
import { findSlideByIdController } from '../slides/usecases/findSlideById/findSlideByIdController';
import { findSlideByNameController } from '../slides/usecases/findSlideByName/findSlideByNameController';
import { updateSlideController } from '../slides/usecases/updateSlide/updateSlideController';

export async function slideRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) 

    app.post('/', createSlideController)
    app.get('/list', listSlidesController)
    app.get('/id/:id', findSlideByIdController)
    app.get('/name/:name', findSlideByNameController)
    app.put('/:id', updateSlideController)
    app.delete('/:id', deleteSlideController)
}