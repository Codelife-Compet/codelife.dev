// todas as operações dentro do banco de dados vão passar pelo repositorio

import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { UserProps, User } from "@/domain/entities/user";

export class PrismaUsersRepository implements UsersRepository {

    async create(data: UserProps): Promise<User> {
        const user = await prisma.user.create({ data });

        return new User(user)
    }

    async findByToken(token: string, type: string): Promise<User | null> {

        let user;

        switch (type) {
            case "github":
                user = await prisma.user.findUnique({ where: { github_token: token } })
                break;

            case "facebook":
                user = await prisma.user.findUnique({ where: { facebook_token: token } })
                break;

            case "google":
                user = await prisma.user.findUnique({ where: { google_token: token } })
                break;
            default:
                throw new Error("Token invalido.")

        }

        return (user ? new User(user) : null)
    }

    async findByEmailPassword(email: string, password: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return null

        if (user.password === password)
            return new User(user)

        return null

    }


    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        return (user ? new User(user) : null)
    }
}