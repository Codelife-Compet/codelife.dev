import { userRoutes } from '@/domain/users/controllers/user/routes'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env';
import fastifyCookie from '@fastify/cookie';
import { islandRoutes } from '@/domain/trilhas/@routes/island.routes';
import { levelRoutes } from '@/domain/trilhas/@routes/level.routes';
import { slideRoutes } from '@/domain/trilhas/@routes/slide.routes';
import { userCodeRoutes } from '@/domain/trilhas/@routes/userCode.routes';
import { videoRoutes } from '@/domain/trilhas/@routes/video.routes';
import { teamRoutes } from '@/domain/ranking/@routes/team.routes';
import { trailRoutes } from '@/domain/trilhas/@routes/trail.routes';
import { rankingRoutes } from '@/domain/ranking/@routes/ranking.routes';
import { exerciseRoutes } from '@/domain/listasExercicios/@routes/exercicies.routes';
import { exercisesListRoutes } from '@/domain/listasExercicios/@routes/exerciciesLists.routes';
import { exerciseStatusRoutes } from '@/domain/listasExercicios/@routes/exerciseStatus.routes';
import { languageExercisesListRoutes } from '@/domain/listasExercicios/@routes/languageExercisesLists.routes';

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

app.register(trailRoutes, { prefix: 'trail' })
app.register(islandRoutes, { prefix: 'island' })
app.register(levelRoutes, { prefix: 'level' })
app.register(slideRoutes, { prefix: 'slide' })
app.register(userCodeRoutes, { prefix: 'usercode' })
app.register(videoRoutes, { prefix: 'video' })

app.register(rankingRoutes, { prefix: 'ranking' })
app.register(teamRoutes, { prefix: 'team' })

app.register(exerciseRoutes, { prefix: 'exercises' })
app.register(exercisesListRoutes, { prefix: 'exercises-list' })
app.register(exerciseStatusRoutes, { prefix: 'exercise-status' })
app.register(languageExercisesListRoutes, { prefix: 'language-exercises-list' })

