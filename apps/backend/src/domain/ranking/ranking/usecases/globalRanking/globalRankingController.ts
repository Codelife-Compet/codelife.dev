import { FastifyReply, FastifyRequest } from 'fastify';
import { makeGlobalRankingUseCase } from './makeGlobalRankingUseCase';

export async function globalRankingController(request: FastifyRequest, reply: FastifyReply) {

	const globalRankingUseCase = makeGlobalRankingUseCase();

	const ranking = await globalRankingUseCase.execute();

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.usersPonctuation);
}
