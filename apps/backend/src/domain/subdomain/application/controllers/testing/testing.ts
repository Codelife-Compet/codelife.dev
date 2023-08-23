import { FastifyReply, FastifyRequest } from 'fastify';

export async function testing(request: FastifyRequest, reply: FastifyReply) { // cria um usuario
	
	console.log("Teste funcionando")
	
	return reply
		.status(201) // retorna sucesso
		.send("Teste funcionando"); // com resposta vazia, pois em criação não precisa devolver nada do db
}