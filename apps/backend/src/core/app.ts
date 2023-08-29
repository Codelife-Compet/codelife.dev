import { userRoutes } from '@/domain/controllers/user/routes'
import fastify from 'fastify'

export const app = fastify()

app.register(userRoutes, { prefix: 'user' })
