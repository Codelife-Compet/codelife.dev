import { Account } from "@/domain/users/entities/acccount";
import { AccountsRepository } from "@/domain/users/repositories/interface/accountsRepository";
import { InMemoryUsersRepository } from "./in-memory-users-repository";

export class InMemoryAccountsRepository implements AccountsRepository {

    public items: Account[] = []

    constructor(private inMemoryUsersRepository: InMemoryUsersRepository) { }

    async list(): Promise<Account[]> {
        return this.items
    }

    async create(data: Account): Promise<Account> {

        this.items.push(data);

        const user = await this.inMemoryUsersRepository.findById(data.userId.toString())
        if (user) {
            user.accounts?.push(data)
            this.inMemoryUsersRepository.save(user)
        }
        return data;
    }

    async findById(id: string): Promise<Account | null> {
        const account = this.items.find(account => account.id.toString() === id)

        return (account ? account : null)
    }

    async findAccountByProvider_UserId(provider: string, userId: string): Promise<Account | null> {

        const account = this.items.find(account => account.provider === provider && account.userId === userId)

        return (account ? account : null)
    }
}