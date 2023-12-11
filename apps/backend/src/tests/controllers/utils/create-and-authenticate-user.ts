import { prisma } from '@/core/db/prisma'
import { Role } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUser(app: FastifyInstance, isAdmin = false) {
    
    const user = await prisma.user.create({
        data: {
            name: 'E2E_Test_user',
            email: 'user@user.com',
            password: '123456',
            role: isAdmin ? 'ADMIN' : 'MEMBER'  as Role
        }
    })

    const authResponse = await request(app.server)
        .post('/login')
        .send({
            email: 'user@user.com',
            password: '123456'
        })

    const { token } = authResponse.body

    return { token }
}