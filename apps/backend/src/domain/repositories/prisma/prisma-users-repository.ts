// todas as operações dentro do banco de dados vão passar pelo repositorio

import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { UserProps, User } from "@/domain/entities/user";

export class PrismaUsersRepository implements UsersRepository {

    async create(data: UserProps) : Promise<User> {
        const user = await prisma.user.create({data});

        return new User(user)
    }

    async findByGithubToken(github_token: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { github_token }
        })

        return (user ? new User(user) : null)
    }

    async findByLinkedinToken(linkedin_token: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { linkedin_token }
        })

        return (user ? new User(user) : null)
    }
}