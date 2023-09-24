import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { User, UserProps } from "@/domain/entities/user";
import { faker } from '@faker-js/faker'

export function makeUser(override: Partial<UserProps> = {}, id?: UniqueEntityID) {
    const user = new User({
        name: faker.lorem.sentence(),
        email: faker.lorem.sentence(),
        role: faker.lorem.sentence(),
        github_token: faker.lorem.sentence(),
        linkedin_token: faker.lorem.sentence(),
        profile_picture: faker.lorem.sentence(),
        created_at: new Date(),
        ...override
    }, id)
    
    return user
}