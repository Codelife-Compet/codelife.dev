import { User, UserProps } from "@/domain/entities/user"

export interface UsersRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: UserProps): Promise<User>
    findByGithubToken(github_token: string): Promise<User | null>
    findByLinkedinToken(linkedin_token: string): Promise<User | null>
}