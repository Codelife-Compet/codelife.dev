import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createUserCodeController } from '../user-codes/usecases/createUserCodes/createUserCodeController';
import { listUserCodesController } from '../user-codes/usecases/listUserCodes/listUserCodesController';
import { findUserCodeByIdController } from '../user-codes/usecases/findUserCodeById/findUserCodeByIdController';
import { findUserCodeByNameController } from '../user-codes/usecases/findUserCodeByUserName/findSlideByUserNameController';
import { updateUserCodeController } from '../user-codes/usecases/updateUserCode/updateUserCodeController';
import { deleteUserCodeController } from '../user-codes/usecases/deleteUserCode/deleteUserCodeController';
import { listSlideUserCodesController } from '../user-codes/usecases/listSlideUserCodes/listSlideUserCodesController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';

export async function userCodeRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/', createUserCodeController)
    app.get('/list', listUserCodesController)
    app.get('/list/:id', listSlideUserCodesController)
    app.get('/id/:id', findUserCodeByIdController)
    app.get('/userName/:userName', findUserCodeByNameController)
    app.put('/:id', { onRequest: [verifyUserRole('ADMIN')] }, updateUserCodeController)
    app.delete('/:id', { onRequest: [verifyUserRole('ADMIN')] }, deleteUserCodeController)
}