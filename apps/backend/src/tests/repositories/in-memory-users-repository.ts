import { UsersRepository } from "@/domain/repositories/interface/users-repository";
import { User, Prisma, Role, $Enums } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {

    public items: User[] = []

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            github_token: (data.github_token ? data.github_token : null),
            linkedin_token: (data.linkedin_token ? data.linkedin_token : null),
            created_at: new Date(),
            role: Role.USER
        }

        this.items.push(user)
        return user
    }

    async findByGithubToken(github_token: string): Promise<User | null> {
        const user = this.items.find((user) => user.github_token === github_token)

        return (user ? user : null)

    }
    async findByLinkedinToken(linkedin_token: string): Promise<User | null> {
        const user = this.items.find((user) => user.linkedin_token === linkedin_token)

        return (user ? user : null)
    }

}