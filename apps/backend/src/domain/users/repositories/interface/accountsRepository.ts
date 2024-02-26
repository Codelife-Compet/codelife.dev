import { Account, AccountProps } from "@/domain/users/entities/acccount"

export interface AccountsRepository { 
    list(): Promise<Account[]>
    create(data: AccountProps): Promise<Account>
    findById(id: string): Promise<Account | null>
    findAccountByProvider_UserId(provider: string, userId: string): Promise<Account | null>
}