// parte especifica de lidar com http

import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * @description Chamada quando o token do usuário expirar. Confere se este possui um refreshToken válido, 
 * gera um novo token e um refreshToken para o usuário.
 */
export async function refresh(request: FastifyRequest, reply: FastifyReply) { // cria um usuario

	await request.jwtVerify({ onlyCookie: true }); // valida se usuário está autenticado, sem olhar para o cabeçalho da requisição, apenas se existe um refresh token nos cookies

	const { role } = request.user;

	const token = await reply.jwtSign({}, {
		sign: {
			sub: request.user.sub
		}
	});

	const refreshToken = await reply.jwtSign(
		{
			role
		}, 
		{
			sign: {
				sub: request.user.sub,
				expiresIn: '7d'
			}
		});


	return reply
		.setCookie('refreshToken', refreshToken, {
			path: '/', // rotas com acesso a esse cookie
			secure: true, // cookie será encriptado por https
			sameSite: true, // só será acessível no mesmo dominio
			httpOnly: true // só sera acessaddo pelo backEnd
		})
		.status(200) // retorna sucesso
		.send({ token }); // com resposta vazia, pois em criação não precisa devolver nada do db
}