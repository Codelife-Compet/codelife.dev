import { User } from "@/domain/users/entities/user";
import { UsersRepository } from "@/domain/users/repositories/interface/users-repository";
import { InMemoryAccountsRepository } from "./in-memory-accounts-repository";

export class InMemoryUsersRepository implements UsersRepository {

    public items: User[] = []

    constructor() {}

    async create(user: User): Promise<User> {

        this.items.push(user);
        
        return user;
    }

    async delete(id: string): Promise<User | null> {

        const user = this.items.find(user => user.id.toString() === id)
        if (!user) 
            return null

        this.items = this.items.filter(user => user.id.toString() !== id)
        return user
    }

    async save(user: User): Promise<User> {

        const index = this.items.findIndex(item => item.id === user.id)

        this.items[index] = user

        return user
    }

    async list(): Promise<User[]> {

        return this.items
    }

    async findByName(name: string): Promise<User | null> {

        const user = this.items.find(user => user.name === name)

        return (user ? user : null)
    }

    async findByToken(token: string, provider: string): Promise<User | null> {
        const user = this.items.find(user => {
            if (user.accounts) {
                return user.accounts.find(account =>
                    account.access_token === token &&
                    account.provider === provider
                );
            }
            return false;
        });

        if (!user) return null;

        return user;
    }

    async findByEmailPassword(email: string, password: string): Promise<User | null> {
        const user = this.items.find(user => user.email === email)

        if (!user) return null

        if (user?.password === password) return user

        return null
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.items.find(user => user.email === email)

        return (user ? user : null)
    }

    async findById(id: string): Promise<User | null> {

        const user = this.items.find(user => user.id.toString() === id)

        return (user ? user : null)
    }
}