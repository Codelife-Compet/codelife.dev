import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { verifyUserRole } from '@/domain/users/middlewares/verify-user-role';
import { addExercisesListController } from '../languageExercisesLists/usecases/addExerciseList/addExerciseListController';
import { createLanguageExercisesListController } from '../languageExercisesLists/usecases/createLanguageExercisesList/createLanguageExercisesListController';
import { deleteLanguageExercisesListController } from '../languageExercisesLists/usecases/deleteLanguageExercisesList/deleteLanguageExercisesListController';
import { fetchExercisesListController } from '../languageExercisesLists/usecases/fetchExercisesLists/fetchExercisesListsController';
import { findLanguageExercisesListByIdController } from '../languageExercisesLists/usecases/findLanguageExercisesListsById/findLanguageExercisesListsByIdController';
import { findLanguageExercisesListBylanguageController } from '../languageExercisesLists/usecases/findLanguageExercisesListsByLanguage/findLanguageExerciseListByLanguageController';
import { removeExercisesListController } from '../languageExercisesLists/usecases/removeExercisesList/removeExercisesListController';

export async function languageExercisesListRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.get('/:id', { onRequest: [verifyUserRole('ADMIN')] }, findLanguageExercisesListByIdController)
    app.get('/language/:language', { onRequest: [verifyUserRole('ADMIN')] }, findLanguageExercisesListBylanguageController)
    app.post('/', { onRequest: [verifyUserRole('ADMIN')] }, createLanguageExercisesListController)
    app.put('/', { onRequest: [verifyUserRole('ADMIN')] }, addExercisesListController)
    app.put('/exercises-list', { onRequest: [verifyUserRole('ADMIN')] }, addExercisesListController)
    app.delete('/exercises-list', { onRequest: [verifyUserRole('ADMIN')] }, removeExercisesListController)
    app.delete('/', { onRequest: [verifyUserRole('ADMIN')] }, deleteLanguageExercisesListController)
    app.get('/exercises-list', { onRequest: [verifyUserRole('ADMIN')] }, fetchExercisesListController)
}