import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { createExerciseController } from '../exercises/usecases/createExercise/createExerciseController';
import { addExerciseStatusController } from '../exercises/usecases/addExerciseStatus/addExerciseStatusController';
import { removeExerciseStatusController } from '../exercises/usecases/removeExerciseStatus/removeExerciseStatusController';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { deleteExerciseController } from '../exercises/usecases/deleteExercise/deleteExerciseController';
import { updateExerciseController } from '../exercises/usecases/updateExercise/updateExerciseController';
import { findExerciseByIdController } from '../exercises/usecases/findExerciseById/findExerciseByIdController';
import { findExerciseByNameController } from '../exercises/usecases/findExerciseByName/findExerciseByNameController';

export async function exerciseRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.get('/:id', { onRequest: [verifyUserRole('ADMIN')] }, findExerciseByIdController)
    app.get('/:name', { onRequest: [verifyUserRole('ADMIN')] }, findExerciseByNameController)
    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createExerciseController)
    app.put('/exercise-status', { onRequest: [verifyUserRole('ADMIN')] }, addExerciseStatusController)
    app.delete('/exercise-status', { onRequest: [verifyUserRole('ADMIN')] }, removeExerciseStatusController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteExerciseController)
    app.put('/', { onRequest: [verifyUserRole('ADMIN')] }, updateExerciseController)
}