// todas as operações dentro do banco de dados vão passar pelo repositorio

import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { Prisma, User } from "@prisma/client";


export class PrismaUsersRepository implements UsersRepository {

    async create(data: Prisma.UserCreateInput) : Promise<User> {
        const user = await prisma.user.create({ data });

        return user
    }

    async findByGithubToken(github_token: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { github_token }
        })

        return user
    }

    async findByLinkedinToken(linkedin_token: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { linkedin_token }
        })

        return user
    }
}