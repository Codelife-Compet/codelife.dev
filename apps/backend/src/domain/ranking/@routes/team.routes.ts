import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createController } from '../team/usecases/createTeam/createTeamController';
import { addUserToTeamController } from '../team/usecases/addUserToTeam/addUserToTeamController';
import { removeUserFromTeamController } from '../team/usecases/removeUserFromTeam/removeUserFromTeamController';
import { deleteTeamController } from '../team/usecases/deleteTeam/deleteTeamController';
import { findTeamByNameController } from '../team/usecases/findByName/findTeamByNameController';
import { findTeamByIdController } from '../team/usecases/findById/findTeamByIdController';
import { listTeamsController } from '../team/usecases/listTeams/listTeamController';
import { listUsersFromTeamController } from '../team/usecases/listUsersFromTeam/listUsersFromTeamController';
import { updateTeamController } from '../team/usecases/updateTeam/updateTeamController';

export async function teamRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/user', addUserToTeamController)
    app.post('/', createController)
    app.delete('/', deleteTeamController)
    app.get('/name/:name', findTeamByNameController)
    app.get('/id/:id', findTeamByIdController)
    app.get('/list', listTeamsController)
    app.get('/list/:id', listUsersFromTeamController)
    app.delete('/user', removeUserFromTeamController)
    app.put('/', updateTeamController)
}