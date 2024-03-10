import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Island, IslandProps } from "@/domain/trilhas/@entities/island";
import { faker } from '@faker-js/faker'
import { makeTrail } from "./makeTrail";

export function makeIsland(override: Partial<IslandProps> = {}, id?: UniqueEntityID) {
    
    const trail = makeTrail()
    
    const island = new Island({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        theme: faker.lorem.sentence(),
        trailId: trail.id.toString(),
        ...override
    }, id)
    
    return island
}