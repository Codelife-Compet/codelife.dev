import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { User } from "@/domain/users/entities/user";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Account } from "../../entities/acccount";

export class PrismaUsersRepository implements UsersRepository {

    async findByName(name: string): Promise<User | null> {

        const user = await prisma.user.findFirst({
            where: { name: { equals: name } }
        })

        if (!user) return null;

        return new User({ ...user, accounts: [] }, new UniqueEntityID(user.id));
    }

    async list(): Promise<User[]> {

        const users = await prisma.user.findMany({
            include: { accounts: true }
        });

        return users.map(user => {

            const { accounts, ...rest } = user

            const newAccounts = accounts.map(account => {
                return new Account(account, new UniqueEntityID(account.id))
            })

            return new User({ ...rest, accounts: newAccounts }, new UniqueEntityID(user.id))
        })
    }

    async create(data: User): Promise<User> {

        const { accounts, ...restData } = data.data

        const user = await prisma.user.create({ data: restData });
        return new User(data.data, new UniqueEntityID(user.id))
    }

    async findByToken(token: string, provider: string): Promise<User | null> {

        const user = await prisma.user.findFirst({
            where: {
                accounts: {
                    some: {
                        userId: token,
                        provider: provider
                    }
                }
            }
        });
        if (!user) return null;

        const accountsPrisma = await prisma.account.findMany({ where: { userId: token } })
        const accounts = accountsPrisma.map(account => {
            return new Account(account, new UniqueEntityID(account.id))
        })

        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }

    async findByEmailPassword(email: string, password: string): Promise<User | null> {

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return null

        const accountsPrisma = await prisma.account.findMany({ where: { userId: user.id } })
        const accounts = accountsPrisma.map(account => {
            return new Account(account, new UniqueEntityID(account.id))
        })

        if (user.password === password)
            return new User({ ...user, accounts }, new UniqueEntityID(user.id));
        return null
    }


    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return null;

        const accountsPrisma = await prisma.account.findMany({ where: { userId: user.id } })
        const accounts = accountsPrisma.map(account => {
            return new Account(account, new UniqueEntityID(account.id))
        })

        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }

    async findById(id: string): Promise<User | null> {

        const user = await prisma.user.findUnique({
            where: { id, }
        });

        if (!user) return null;

        const accountsPrisma = await prisma.account.findMany({ where: { userId: user.id } })
        const accounts = accountsPrisma.map(account => {
            return new Account(account, new UniqueEntityID(account.id))
        })
        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }
}

