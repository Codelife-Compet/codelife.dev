import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Trail, TrailProps } from "@/domain/trilhas/@entities/trail";
import { faker } from '@faker-js/faker'

export function makeTrail(override: Partial<TrailProps> = {}, id?: UniqueEntityID) {
    const trail = new Trail({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        theme: faker.lorem.sentence(),
        ...override
    }, id)
    
    return trail
}