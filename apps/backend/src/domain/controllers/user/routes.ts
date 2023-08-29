import { FastifyInstance } from 'fastify';
import { create } from './create';
import { loginGithub } from './login-github';
import { loginLinkedin } from './login-linkedin';

export async function userRoutes(app: FastifyInstance) {
    app.post('/create', create)
    app.post('/login-github/:github_token', loginGithub)
    app.post('/login-linkedin/:linkedin_token', loginLinkedin)
}