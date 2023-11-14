import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAddUserToTeamUseCase } from './makeAddUserToUseCase';

export const addusertoTeamBodySchema = z.object({
	userId: z.string(),
	teamName: z.string()
});

export async function addUserToTeamController(request: FastifyRequest, reply: FastifyReply) {

	const { teamName, userId } = addusertoTeamBodySchema.parse(request.body);

	const addusertoTeamUseCase = makeAddUserToTeamUseCase();

	const team = await addusertoTeamUseCase.execute({ teamName, userId });

	if (team.isLeft()) {
		return reply
			.status(400)
			.send({ error_message: team.value.error.message })
	}

	return reply.status(201).send({ addusertod_user: team.value });
}
