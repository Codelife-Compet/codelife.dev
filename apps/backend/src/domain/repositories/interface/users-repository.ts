import { User, UserProps } from "@/domain/entities/user"

export interface UsersRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: UserProps): Promise<User>
    findByToken(token: string, type: string): Promise<User | null>
    findByEmailPassword(email: string, password: string): Promise<User | null>
    findByEmail(email: string): Promise<User | null>
}