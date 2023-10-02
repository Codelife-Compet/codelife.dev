import { Island } from "@/domain/trilhas/@entities/island";
import { Level } from "@/domain/trilhas/@entities/level";
import { CreateSlideUseCase } from "@/domain/trilhas/slides/usecases/createSlide/createSlideUseCase";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryLevelsRepository } from "@/tests/repositories/in-memory-level-repository ";
import { InMemorySlidesRepository } from "@/tests/repositories/in-memory-slides-repository ";

let inMemoryIslandsRepository: InMemoryIslandsRepository
let inMemoryLevelsRepository: InMemoryLevelsRepository
let inMemorySlidesRepository: InMemorySlidesRepository;
let sut: CreateSlideUseCase;
let level: Level
let island: Island

describe("Create Slide", () => {

    beforeEach(async () => {
        inMemoryIslandsRepository = new InMemoryIslandsRepository()
        inMemoryLevelsRepository = new InMemoryLevelsRepository(inMemoryIslandsRepository)
        inMemorySlidesRepository = new InMemorySlidesRepository(inMemoryLevelsRepository);
        sut = new CreateSlideUseCase(inMemorySlidesRepository);

        island = await inMemoryIslandsRepository.create({
            description: "island description",
            name: "Island name",
            theme: "island theme",
        })

        level = await inMemoryLevelsRepository.create({
            description: "level description",
            name: "Level name",
            theme: "level theme",
            islandId: island.id.toString()
        })
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
        await sut.execute({
            description: "slide description",
            levelId: level.id.toString(),
            name: "slide",
            theme: "theme",
            baseCode: "basecode"
        });

        const result = await sut.execute({
            description: "slide description",
            levelId: level.id.toString(),
            name: "slide",
            theme: "theme",
            baseCode: "basecode"
        });

        expect(result.isLeft());
    });
});
