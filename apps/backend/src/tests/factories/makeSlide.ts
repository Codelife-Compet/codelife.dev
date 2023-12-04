import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Slide, SlideProps } from "@/domain/trilhas/@entities/slide";
import { faker } from '@faker-js/faker'
import { makeLevel } from "./makeLevel";

export function makeSlide(override: Partial<SlideProps> = {}, id?: UniqueEntityID) {
    
    const level = makeLevel()
    
    const slide = new Slide({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        theme: faker.lorem.sentence(),
        levelId: level.id.toString(),
        baseCode: faker.lorem.paragraph(),
        ...override
    }, id)
    
    return slide
}