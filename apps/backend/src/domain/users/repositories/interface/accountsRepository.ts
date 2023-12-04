import { Account, AccountProps } from "@/domain/users/entities/acccount"

export interface AccountsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    list(): Promise<Account[]>
    create(data: AccountProps): Promise<Account>
    findById(id: string): Promise<Account | null>
    findAccountByProvider_UserId(provider: string, userId: string): Promise<Account | null>
}