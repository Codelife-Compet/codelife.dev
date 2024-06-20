import { FastifyReply, FastifyRequest } from 'fastify';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { ListTeamsUseCase } from './listTeamsUseCase';

export async function listTeamsController(request: FastifyRequest, reply: FastifyReply) {

	const teamsRepository = new TeamsPrismaRepository()
    const listTeamsUseCase = new ListTeamsUseCase(teamsRepository)

	const team = await listTeamsUseCase.execute();

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.teams);
}
