import { FastifyReply, FastifyRequest } from 'fastify';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { ListUsersFromTeamUseCase } from './listUsersFromTeamUseCase';
import { z } from 'zod';

export const listUsersFromTeamBodySchema = z.object({
	id: z.string(),
});

export async function listUsersFromTeamController(request: FastifyRequest, reply: FastifyReply) {

	const { id } = listUsersFromTeamBodySchema.parse(request.params);

	const teamsRepository = new TeamsPrismaRepository()
    const listUsersFromTeamUseCase = new ListUsersFromTeamUseCase(teamsRepository)

	const team = await listUsersFromTeamUseCase.execute({ teamId: id });

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.teams);
}
