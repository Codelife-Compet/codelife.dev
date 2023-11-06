import { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole (roleToVerify: 'ADMIN' | 'USER') {
    return async (request: FastifyRequest, reply: FastifyReply) => {

        const { role } = request.user
    
        if(role !== roleToVerify) {
            return reply
            .status(401) // status de nao autorizado
            .send({message: 'Unauthorized.'})
        }
    }
}