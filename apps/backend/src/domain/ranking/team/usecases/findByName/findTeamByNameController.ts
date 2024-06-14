import { FastifyReply, FastifyRequest } from 'fastify';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { FindTeamByNameUseCase } from './findTeamByNameUseCase';
import { z } from 'zod';

export const findTeamBodySchema = z.object({
	name: z.string(),
});

export async function findTeamByNameController(request: FastifyRequest, reply: FastifyReply) {

    const { name } = findTeamBodySchema.parse(request.body);

	const teamsRepository = new TeamsPrismaRepository()
    const findTeamByNameUseCase = new FindTeamByNameUseCase(teamsRepository)

	const team = await findTeamByNameUseCase.execute({ teamName: name });

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.team);
}
