import { FastifyReply, FastifyRequest } from 'fastify';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { FindTeamByIdUseCase } from './findTeamByIdUseCase';
import { z } from 'zod';

export const findTeamBodySchema = z.object({
	teamId: z.string(),
	trailId: z.string(),
});

export async function findTeamByIdController(request: FastifyRequest, reply: FastifyReply) {

    const { teamId, trailId } = findTeamBodySchema.parse(request.body);

	const teamsRepository = new TeamsPrismaRepository()
    const findTeamByIdUseCase = new FindTeamByIdUseCase(teamsRepository)

	const team = await findTeamByIdUseCase.execute({ teamId });

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.team);
}
