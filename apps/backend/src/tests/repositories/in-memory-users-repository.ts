import { User, UserProps } from "@/domain/entities/user";
import { UsersRepository } from "@/domain/repositories/interface/users-repository";

export class InMemoryUsersRepository implements UsersRepository {

    public items: User[] = []

    async create(data: UserProps): Promise<User> {
            
        const user = new User(data);
        this.items.push(user);
    
        return user;
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