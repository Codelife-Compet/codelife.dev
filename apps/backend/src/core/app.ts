import { userRoutes } from '@/domain/users/controllers/user/routes'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env';
import fastifyCookie from '@fastify/cookie';

export const app = fastify()

app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	cookie: {
		cookieName: 'refreshToken',
		signed: false // esse cookie n é assinado (hashed)
	},
	sign: {
		expiresIn: '10m' // token padrão será revalidado a cada 10 min pelo refresh
	}
});

app.register(fastifyCookie)

app.register(userRoutes, { prefix: 'user' })
