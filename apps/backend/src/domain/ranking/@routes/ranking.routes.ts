import { FastifyInstance } from 'fastify';
import { verifyJWT } from '@/domain/users/middlewares/verify-jwt';
import { globalRankingController } from '../ranking/usecases/globalRanking/globalRankingController';
import { teamRankingController } from '../ranking/usecases/teamRanking/teamRankingController';
import { teamsRankingController } from '../ranking/usecases/teamsRanking/teamsRankingController';
import { teamlevelRankingController } from '../ranking/usecases/teamLevelRanking/teamLevelRankingController';
import { teamslevelRankingController } from '../ranking/usecases/teamsLevelRanking/teamsLevelRankingController';

export async function rankingRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT) 

    app.get('/', globalRankingController) // rankeamento global (todos contra todos)
    app.get('/team/:teamName', teamRankingController) // rankeamento intertno dentro do time)
    app.get('/teams', teamsRankingController) // rankeamento entre times
    app.get('/team/:levelId/:teamName', teamlevelRankingController) // rankemento interno dentro do time por nível
    app.get('/teams/:levelId', teamslevelRankingController) // rankeamento entre times por nível
}