import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { createExerciseStatusController } from '../exerciseStatus/usecases/createExerciseStatus/createExerciseStatusController';
import { deleteExerciseStatusController } from '../exerciseStatus/usecases/deleteExerciseStatus/deleteExerciseStatusController';
import { updateExerciseStatusController } from '../exerciseStatus/usecases/updateExerciseStatus/updateExerciseStatusController';
import { findExerciseStatusByIdController } from '../exerciseStatus/usecases/findExerciseStatusById/findExerciseStatusByIdController';
import { findExerciseStatusByUserNameController } from '../exerciseStatus/usecases/findExerciseStatusByUserName/findExerciseStatusByUserNameController';

export async function exerciseStatusRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.get('/:id', { onRequest: [verifyUserRole('ADMIN')] }, findExerciseStatusByIdController)
    app.get('/:username', { onRequest: [verifyUserRole('ADMIN')] }, findExerciseStatusByUserNameController)
    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createExerciseStatusController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteExerciseStatusController)
    app.put('/', { onRequest: [verifyUserRole('ADMIN')] }, updateExerciseStatusController)
}