import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRemoveUserFromTeamUseCase } from './makeRemoveUserFromTeamUseCase';

export const removeUserFromTeamBodySchema = z.object({
	userId: z.string(),
	teamName: z.string()
});

export async function removeUserFromTeamController(request: FastifyRequest, reply: FastifyReply) {

	const { teamName, userId } = removeUserFromTeamBodySchema.parse(request.body);

	const removeUserFromTeamUseCase = makeRemoveUserFromTeamUseCase();

	const team = await removeUserFromTeamUseCase.execute({ teamName, userId });

	if (team.isLeft()) 
		return reply
			.status(400)
			.send({ error_message: team.value.error.message })

	return reply
		.status(201)
		.send(team.value.users);
}
