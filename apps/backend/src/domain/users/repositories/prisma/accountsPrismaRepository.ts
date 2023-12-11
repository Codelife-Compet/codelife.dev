import { prisma } from "@/core/db/prisma";
import { Account, AccountProps } from "../../entities/acccount";
import { AccountsRepository } from "../interface/accountsRepository";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class AccountsPrismaRepository implements AccountsRepository {
    
    async list(): Promise<Account[]> {
        
        const accounts = await prisma.account.findMany();

        return accounts.map(account => {
            return new Account(account, new UniqueEntityID(account.id))
        })
    }
    
    async create(data: AccountProps): Promise<Account> {

        const account = await prisma.account.create({ data });

        return new Account(account, new UniqueEntityID(account.id))
    }
    
    async findById(id: string): Promise<Account | null> {

        const account = await prisma.account.findUnique({
            where: { id }
        });

        return (account ? new Account(account, new UniqueEntityID(account.id)) : null);
    }   

    async findAccountByProvider_UserId(provider: string, userId: string): Promise<Account | null> {

        const account = await prisma.account.findFirst({
            where: { provider, userId }
        });

        return (account ? new Account(account, new UniqueEntityID(account.id)) : null);
    }
}

