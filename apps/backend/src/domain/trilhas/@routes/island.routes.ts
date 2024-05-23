import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../island/usecases/createIsland/createIslandController';
import { listIslandsController } from '../island/usecases/listLislands/listIslandsController';
import { findIslandByIdController } from '../island/usecases/findIslandById/findIslandByIdController';
import { findIslandByNameController } from '../island/usecases/findIslandByName/findIslandByNameController';
import { deleteIslandController } from '../island/usecases/deleteIsland/deleteIslandController';
import { updateIslandController } from '../island/usecases/updateIsland/updateIslandController';
import { listTrailIslandsController } from '../island/usecases/listTrailIslands/listTrailIslandsController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';

export async function islandRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createController)
    app.get('/list', listIslandsController)
    app.get('/list/:id', listTrailIslandsController)
    app.get('/id/:id', findIslandByIdController)
    app.get('/name', findIslandByNameController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deleteIslandController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updateIslandController)
}