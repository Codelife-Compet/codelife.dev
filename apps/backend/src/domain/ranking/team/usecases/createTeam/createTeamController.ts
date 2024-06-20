import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';
import { CreateTeamUseCase } from './createTeamUseCase';

export const createTeamBodySchema = z.object({
    name: z.string(),
    institutionName: z.string().optional(),
    institutinPicture: z.string().optional(),
});

export async function createController(request: FastifyRequest, reply: FastifyReply) {

	const { name, institutinPicture, institutionName } = createTeamBodySchema.parse(request.body);

    const teamsRepository = new TeamsPrismaRepository()
    const useCase = new CreateTeamUseCase(teamsRepository)

	const team = await useCase.execute({ name, institutinPicture, institutionName });

	if (team.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: team.value.error.message })
	}

	return reply.status(201).send({ created_user: team.value });
}
