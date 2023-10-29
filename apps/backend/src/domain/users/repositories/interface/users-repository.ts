import { User, UserProps } from "@/domain/users/entities/user"

export interface UsersRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: UserProps): Promise<User>
    findById(id: string): Promise<User | null>
    findByToken(token: string, provider: string): Promise<User | null>
    findByEmailPassword(email: string, password: string): Promise<User | null>
    findByEmail(email: string): Promise<User | null>
}