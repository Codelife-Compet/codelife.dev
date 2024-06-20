import { FastifyReply, FastifyRequest } from 'fastify';
import { LevelsPrismaRepository } from '../../repositories/levelPrismaRepository';
import { ListLevelsUseCase } from './listLevelsUseCase';

export async function listLevelsController(request: FastifyRequest, reply: FastifyReply) {

	const levelsRepository = new LevelsPrismaRepository()
    const listLevelsUseCase = new ListLevelsUseCase(levelsRepository)

	const level = await listLevelsUseCase.execute();

	if (level.isLeft())
		return reply
			.status(400)
			.send(level.value.error)

	return reply
		.status(201)
		.send(level.value.levels);
}
