import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../island/usecases/createIsland/createIslandController';
import { listIslandsController } from '../island/usecases/listLislands/listIslandsController';
import { findIslandByIdController } from '../island/usecases/findIslandById/findIslandByIdController';
import { findIslandByNameController } from '../island/usecases/findIslandByName/findIslandByNameController';
import { deleteIslandController } from '../island/usecases/deleteIsland/deleteIslandController';
import { updateIslandController } from '../island/usecases/updateIsland/updateIslandController';

export async function islandRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) // todas as rotas aqui presentes chamam a verificação 

    app.post('/', createController)
    app.get('/list', listIslandsController)
    app.get('/id/:id', findIslandByIdController)
    app.get('/name', findIslandByNameController)
    app.delete('/:id', deleteIslandController)
    app.put('/:id', updateIslandController)
}