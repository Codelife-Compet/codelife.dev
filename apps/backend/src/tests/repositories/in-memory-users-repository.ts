import { UsersRepository } from "@/domain/repositories/interface/users-repository";
import { User, Prisma, Role } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {

    public items: User[] = []

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            github_token: data.github_token,
            linkedin_token: data.linkedin_token,
            created_at: new Date(),
            role: Role.USER
        }

        this.items.push(user)
        return user
    }

}