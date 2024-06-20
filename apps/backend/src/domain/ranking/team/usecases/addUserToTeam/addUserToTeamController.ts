import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { AddUserToTeamUseCase } from './addUserToTeamUseCase';
import { PrismaUsersRepository } from '@/domain/users/repositories/prisma/prisma-users-repository';
import { TeamsPrismaRepository } from '../../repositories/teamPrismaRepository';

export const addusertoTeamBodySchema = z.object({
	userId: z.string(),
	teamName: z.string()
});

export async function addUserToTeamController(request: FastifyRequest, reply: FastifyReply) {

	const { teamName, userId } = addusertoTeamBodySchema.parse(request.body);

	const teamsRepository = new TeamsPrismaRepository()
    const usersRepository = new PrismaUsersRepository()
    const addusertoTeamUseCase = new AddUserToTeamUseCase(teamsRepository, usersRepository)

	const team = await addusertoTeamUseCase.execute({ teamName, userId });

	if (team.isLeft()) 
		return reply
			.status(400)
			.send(team.value.error);

	return reply
		.status(201)
		.send(team.value.users);
}
