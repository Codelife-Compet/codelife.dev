import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { createPonctuationController } from '../ponctuation/usecases/createPonctuation/createPonctuationController';
import { listPonctuationsController } from '../ponctuation/usecases/listPonctuations/listPonctuationController';
import { listLevelPonctuationsController } from '../ponctuation/usecases/listLevelPonctuations/listLevelPonctuationsController';
import { findPonctuationByIdController } from '../ponctuation/usecases/findPonctuationById/findPonctuationByIdController';
import { findPonctuationByNameController } from '../ponctuation/usecases/findPonctuationByUserName&LevelId/findPonctuationByNameController';
import { updatePonctuationController } from '../ponctuation/usecases/updatePonctuation/updatePonctuationController';
import { deletePonctuationController } from '../ponctuation/usecases/deletePonctuation/deletePonctuationController';

export async function ponctuationRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createPonctuationController)
    app.get('/list', listPonctuationsController)
    app.get('/list/:id', listLevelPonctuationsController)
    app.get('/id/:id', findPonctuationByIdController)
    app.get('/name/:name', findPonctuationByNameController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updatePonctuationController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deletePonctuationController)
}