import { FastifyInstance } from 'fastify';
import { testing } from './testing';

export async function testingRoutes(app: FastifyInstance) {
    app.get('/test', testing)
}