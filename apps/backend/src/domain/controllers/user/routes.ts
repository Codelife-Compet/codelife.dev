import { FastifyInstance } from 'fastify';
import { create } from './create';
import { login } from './login';

export async function userRoutes(app: FastifyInstance) {
    app.post('/create', create)
    app.post('/login', login)
}