import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTeamRankingUseCase } from './makeTeamRankingUseCase';
import { z } from 'zod';

const teamRankingParamsSchema = z.object({
	teamId: z.string()
});

export async function teamRankingController(request: FastifyRequest, reply: FastifyReply) {

	const { teamId } = teamRankingParamsSchema.parse(request.params);

	const teamRankingUseCase = makeTeamRankingUseCase();

	const ranking = await teamRankingUseCase.execute({ teamId });

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.teamsPonctuation);
}
