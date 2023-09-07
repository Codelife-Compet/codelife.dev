import { User, UserProps } from "@/domain/entities/user";
import { UsersRepository } from "@/domain/repositories/interface/users-repository";

export class InMemoryUsersRepository implements UsersRepository {

    public items: User[] = []

    async create(data: UserProps): Promise<User> {

        const user = new User(data);
        this.items.push(user);

        return user;
    }

    async findByToken(token: string, type: string): Promise<User | null> {
        let user: User | undefined;

        switch (type) {
            case "github": user = this.items.find((user) => user.github_token === token); break
            case "google": user = this.items.find((user) => user.google_token === token); break
            case "facebook": user = this.items.find((user) => user.facebook_token === token); break
        }

        return (user ? user : null)
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
}