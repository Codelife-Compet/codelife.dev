import { Level } from "@/domain/trilhas/@entities/level";
import { CreateSlideUseCase } from "@/domain/trilhas/slides/usecases/createSlide/createSlideUseCase";
import { makeLevel } from "@/tests/factories/makeLevel";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryLevelsRepository } from "@/tests/repositories/in-memory-level-repository ";
import { InMemorySlidesRepository } from "@/tests/repositories/in-memory-slides-repository ";
import { InMemoryTrailsRepository } from "@/tests/repositories/in-memory-trail-repository";

let inMemoryTrailsRepository: InMemoryTrailsRepository
let inMemoryIslandsRepository: InMemoryIslandsRepository
let inMemoryLevelsRepository: InMemoryLevelsRepository
let inMemorySlidesRepository: InMemorySlidesRepository;
let sut: CreateSlideUseCase;
let level: Level

describe("Create Slide", () => {

    beforeEach(async () => {
        inMemoryTrailsRepository = new InMemoryTrailsRepository()
        inMemoryIslandsRepository = new InMemoryIslandsRepository(inMemoryTrailsRepository)
        inMemoryLevelsRepository = new InMemoryLevelsRepository(inMemoryIslandsRepository);
        inMemorySlidesRepository = new InMemorySlidesRepository(inMemoryLevelsRepository);
        sut = new CreateSlideUseCase(inMemorySlidesRepository);

        level = makeLevel()
    });

    it("should be able to create a slide ", async () => {

        const result = await sut.execute({
            description: "slide description",
            levelId: level.id.toString(),
            name: "slide",
            theme: "theme",
            baseCode: "basecode"
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemorySlidesRepository.items[0]).toEqual(result.value.slide);
    });

    it("should not be able to create two slides with same name", async () => {

        const slide = await sut.execute({
            description: "slide description",
            levelId: level.id.toString(),
            name: "slide",
            theme: "theme",
            baseCode: "basecode"
        });

        expect(slide.isRight()).toBe(true);

        const result = await sut.execute({
            description: "slide description",
            levelId: level.id.toString(),
            name: "slide",
            theme: "theme",
            baseCode: "basecode"
        });

        expect(result.isLeft());

        if(slide.isRight())
            expect(inMemorySlidesRepository.items.length).toEqual(1)
    });
});
