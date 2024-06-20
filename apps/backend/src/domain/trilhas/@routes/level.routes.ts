import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createLevelController } from '../level/usecases/createLevel/createLevelController';
import { listLevelsController } from '../level/usecases/listLevels/listLevelsController';
import { findLevelByNameController } from '../level/usecases/findLevelByName/findLevelByNameController';
import { findLevelByIdController } from '../level/usecases/findLevelById/findLevelByIdController';
import { listIslandLevelsController } from '../level/usecases/listIslandLevels/listIslandLevelsController';
import { deleteLevelController } from '../level/usecases/deleteLevel/deleteLevelController';
import { updateLevelController } from '../level/usecases/updateLevel/updateLevelController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';

export async function levelRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createLevelController)
    app.get('/list', listLevelsController)
    app.get('/list/:id', listIslandLevelsController)
    app.get('/id/:id', findLevelByIdController)
    app.get('/name/:name', findLevelByNameController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deleteLevelController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updateLevelController)
}