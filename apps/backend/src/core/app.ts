import { testingRoutes } from '@/domain/subdomain/application/controllers/testing/routes'
import fastify from 'fastify'

export const app = fastify()

app.register(testingRoutes)