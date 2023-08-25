import { Prisma, User } from "@prisma/client"

export interface UsersRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: Prisma.UserCreateInput): Promise<User>
    findByGithubToken(github_token: string): Promise<User | null>
    findByLinkedinToken(linkedin_token: string): Promise<User | null>
}