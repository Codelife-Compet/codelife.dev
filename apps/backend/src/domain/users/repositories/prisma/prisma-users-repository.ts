// todas as operações dentro do banco de dados vão passar pelo repositorio

import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { UserProps, User } from "@/domain/users/entities/user";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

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
            return new User(user, new UniqueEntityID(user.id))
        })
    }

    async create(data: UserProps): Promise<User> {

        const { accounts, ...user } = data

        const possibleUser = await prisma.user.findUnique({
            where: { email: user.email as string }
        })
        if (possibleUser) {
            const userAccounts = await prisma.account.findMany({
                where: { userId: possibleUser.id }
            })

            const newAccount = await prisma.account.create({
                data: {
                    id: accounts[accounts.length - 1].id,
                    providerAccountId: accounts[accounts.length - 1].providerAccountId,
                    userId: possibleUser.id,
                    provider: accounts[accounts.length - 1].provider,
                    type: accounts[accounts.length - 1].type,
                    refresh_token: null,
                    access_token: null,
                    expires_at: null,
                    token_type: null,
                    scope: null,
                    id_token: null,
                    session_state: null
                }
            })

            userAccounts.push(newAccount)

            console.dir(userAccounts, { depth: null })

            await prisma.user.update({
                where: { id: possibleUser.id },
                data: {
                    accounts: {
                        set: userAccounts
                    }
                }
            })

            return new User({ ...possibleUser, accounts }, new UniqueEntityID(possibleUser.id))
        }

        const createdUser = await prisma.user.create({ data: user });

        if (accounts.length !== 0) {
            const account = accounts[accounts.length - 1];

            await prisma.account.create({
                data: {
                    ...account,
                    userId: createdUser.id
                }
            })
        }

        return new User(data, new UniqueEntityID(user.id))
    }

    async findByToken(token: string, provider: string): Promise<User | null> {
        
        console.dir({ token, provider })

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

        const accounts = await prisma.account.findMany({ where: { userId: token } })

        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }

    async findByEmailPassword(email: string, password: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return null

        const accounts = await prisma.account.findMany({ where: { userId: user.id } })

        if (user.password === password)
            return new User({ ...user, accounts }, new UniqueEntityID(user.id));
        return null
    }


    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) return null;

        const accounts = await prisma.account.findMany({ where: { userId: user.id } })

        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }

    async findById(id: string): Promise<User | null> {

        const user = await prisma.user.findUnique({
            where: { id, }
        });

        if (!user) return null;

        const accounts = await prisma.account.findMany({ where: { userId: user.id } })

        return new User({ ...user, accounts }, new UniqueEntityID(user.id));
    }
}
