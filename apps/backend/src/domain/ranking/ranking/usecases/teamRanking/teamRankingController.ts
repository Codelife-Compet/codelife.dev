import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTeamRankingUseCase } from './makeTeamRankingUseCase';
import { z } from 'zod';

const teamRankingParamsSchema = z.object({
	teamName: z.string()
});

export async function teamRankingController(request: FastifyRequest, reply: FastifyReply) {

	const { teamName } = teamRankingParamsSchema.parse(request.params);

	const teamRankingUseCase = makeTeamRankingUseCase();

	const ranking = await teamRankingUseCase.execute({ teamName });

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.teamsPonctuation);
}
