import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTeamLevelRankingUseCase } from './makeTeamLevelRankingUseCase';
import { z } from 'zod';

export const teamlevelRankingParamsSchema = z.object({
	teamName: z.string(),
	levelId: z.string()
})

export async function teamlevelRankingController(request: FastifyRequest, reply: FastifyReply) {

	const { teamName, levelId } = teamlevelRankingParamsSchema.parse(request.params);

	const teamlevelRankingUseCase = makeTeamLevelRankingUseCase();

	const ranking = await teamlevelRankingUseCase.execute({teamName, levelId });

	if (ranking.isLeft()) {
		return reply
			.status(400)
			.send(ranking.value.error)
	}

	return reply.status(201).send(ranking.value.usersPonctuation);
}
