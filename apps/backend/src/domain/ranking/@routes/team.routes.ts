import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../team/usecases/createTeam/createTeamController';
import { addUserToTeamController } from '../team/usecases/addUserToTeam/addUserToTeamController';
import { removeUserFromTeamController } from '../team/usecases/removeUserFromTeam/removeUserFromTeamController';

export async function teamRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/create', createController)
    app.post('/adduser', addUserToTeamController)
    app.delete('/user', removeUserFromTeamController)
}