import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTeamsLevelRankingUseCase } from './makeTeamsLevelRankingUseCase';
import { z } from 'zod';

export const teamslevelRankingParamsSchema = z.object({
	teamsName: z.string(),
	levelId: z.string()
})

export async function teamslevelRankingController(request: FastifyRequest, reply: FastifyReply) {

	const { teamsName, levelId } = teamslevelRankingParamsSchema.parse(request.params);

	const teamslevelRankingUseCase = makeTeamsLevelRankingUseCase();

	const ranking = await teamslevelRankingUseCase.execute({ teamsName, levelId });

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.teamsPonctuation);
}
