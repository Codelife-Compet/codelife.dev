import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Level, LevelProps } from "@/domain/trilhas/@entities/level";
import { faker } from '@faker-js/faker'
import { makeIsland } from "./makeIsland";

export function makeLevel(override: Partial<LevelProps> = {}, id?: UniqueEntityID) {
    
    const island = makeIsland()
    
    const level = new Level({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        theme: faker.lorem.sentence(),
        islandId: island.id.toString(),
        ...override
    }, id)
    
    return level
}