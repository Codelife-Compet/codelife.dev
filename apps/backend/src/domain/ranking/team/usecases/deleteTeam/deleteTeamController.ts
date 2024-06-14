import { FastifyReply, FastifyRequest } from 'fastify';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { DeleteTeamUseCase } from './deleteITeamUseCase';
import { z } from 'zod';

export const createTeamBodySchema = z.object({
	id: z.string(),
});

export async function deleteTeamController(request: FastifyRequest, reply: FastifyReply) {

    const { id } = createTeamBodySchema.parse(request.params);

	const teamsRepository = new TeamsPrismaRepository()
	const deleteTeamUseCase = new DeleteTeamUseCase(teamsRepository)
	const team = await deleteTeamUseCase.execute({ id });

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.team);
}
