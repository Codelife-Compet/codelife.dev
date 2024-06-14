import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { UpdateTeamUseCase } from './updateTeamUseCase';

export const updateTeamParamsSchema = z.object({
	id: z.string(),
});

export const updateTeamBodySchema = z.object({
	name: z.string().optional(),
	institutionName: z.string().optional(),
	institutinPicture: z.string().optional(),
});

export async function updateTeamController(request: FastifyRequest, reply: FastifyReply) {

	const data = updateTeamBodySchema.parse(request.body);
	const { id } = updateTeamParamsSchema.parse(request.params);
	
    const teamsRepository = new TeamsPrismaRepository()
    const updateTeamUseCase = new UpdateTeamUseCase(teamsRepository)

	const team = await updateTeamUseCase.execute({ id, ...data });

	if (team.isLeft())
		return reply
			.status(400)
			.send(team.value.error)

	return reply
		.status(201)
		.send(team.value.team);
}
