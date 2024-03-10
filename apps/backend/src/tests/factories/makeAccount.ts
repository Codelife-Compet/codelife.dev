import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Account } from "@/domain/users/entities/acccount";
import { faker } from '@faker-js/faker'

export function makeAccount(override: Partial<Account> = {}, id?: UniqueEntityID) {
    
    const account = new Account({
        provider: faker.internet.domainName(),
        providerAccountId: faker.internet.domainName(),
        type: "oauth",
        userId: faker.internet.domainName(),
        ...override
    })
    
    return account
}