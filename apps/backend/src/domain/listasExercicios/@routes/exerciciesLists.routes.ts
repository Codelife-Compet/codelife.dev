import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { createExerciseListController } from '../exercisesLists/usecases/createExercisesList/createExercisesListController';
import { addExerciseController } from '../exercisesLists/usecases/addExercise/addExerciseController';
import { removeExerciseController } from '../exercisesLists/usecases/removeExercise/removeExercisesListController';
import { deleteExerciseController } from '../exercises/usecases/deleteExercise/deleteExerciseController';
import { updateExerciseController } from '../exercises/usecases/updateExercise/updateExerciseController';
import { fetchExercisesController } from '../exercisesLists/usecases/fetchExercises/fetchExercisesController';
import { findExercisesListByIdController } from '../exercisesLists/usecases/findExerciseListById/findExerciseListByIdController';
import { findExercisesListByTopicController } from '../exercisesLists/usecases/findExerciseListByTopic/findExerciseListByTopicController';

export async function exerciseslistsListRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.get('/:id', { onRequest: [verifyUserRole('ADMIN')] }, findExercisesListByIdController)
    app.get('/:topic', { onRequest: [verifyUserRole('ADMIN')] }, findExercisesListByTopicController)
    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createExerciseListController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteExerciseController)
    app.put('/', { onRequest: [verifyUserRole('ADMIN')] }, updateExerciseController)
    app.put('/exercise', { onRequest: [verifyUserRole('ADMIN')] }, addExerciseController)
    app.delete('/exercise', { onRequest: [verifyUserRole('ADMIN')] }, removeExerciseController)
    app.get('/exercises', { onRequest: [verifyUserRole('ADMIN')] }, fetchExercisesController)
}