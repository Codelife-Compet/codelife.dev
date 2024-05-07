import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createLevelController } from '../level/usecases/createLevel/createLevelController';
import { listLevelsController } from '../level/usecases/listLevels/listLevelsController';
import { findLevelByNameController } from '../level/usecases/findLevelByName/findLevelByNameController';
import { findLevelByIdController } from '../level/usecases/findLevelById/findLevelByIdController';

export async function levelRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) // todas as rotas aqui presentes chamam a verificação 

    app.post('/', createLevelController)
    app.get('/list', listLevelsController)
    app.get('/id/:id', findLevelByIdController)
    app.get('/name/:name', findLevelByNameController)
    app.delete('/:id', deleteLevelController)
    app.put('/:id', updateLevelController)
}