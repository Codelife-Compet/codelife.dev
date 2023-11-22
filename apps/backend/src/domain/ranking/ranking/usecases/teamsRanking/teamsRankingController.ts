import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTeamsRankingUseCase } from './makeTeamsRankingUseCase';

export async function teamsRankingController(request: FastifyRequest, reply: FastifyReply) {

	const teamsRankingUseCase = makeTeamsRankingUseCase();

	const ranking = await teamsRankingUseCase.execute();

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.ponctuationPerTeamName);
}
