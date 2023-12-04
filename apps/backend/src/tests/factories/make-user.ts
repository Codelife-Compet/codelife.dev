import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { User, UserProps } from "@/domain/users/entities/user";
import { fa, faker } from '@faker-js/faker'

export function makeUser(override: Partial<UserProps> = {}, id?: UniqueEntityID) {
    
    const user = new User({
        name: faker.lorem.sentence(),
        email: faker.lorem.sentence(),
        role: "USER",
        score: 0,
        emailVerified: new Date(),
        image: faker.lorem.sentence(),
        ...override
    })
    
    return user
}