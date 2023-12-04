import { Island } from "@/domain/trilhas/@entities/island";
import { CreateLevelUseCase } from "@/domain/trilhas/level/usecases/createSlide/createLevelUseCase";
import { makeIsland } from "@/tests/factories/makeIsland";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryLevelsRepository } from "@/tests/repositories/in-memory-level-repository ";
import { InMemoryTrailsRepository } from "@/tests/repositories/in-memory-trail-repository";

let inMemoryTrailsRepository: InMemoryTrailsRepository
let inMemoryIslandsRepository: InMemoryIslandsRepository
let inMemoryLevelsRepository: InMemoryLevelsRepository;
let sut: CreateLevelUseCase;
let island: Island

describe("Create Level", () => {

    beforeEach(async () => {
        inMemoryTrailsRepository = new InMemoryTrailsRepository()
        inMemoryIslandsRepository = new InMemoryIslandsRepository(inMemoryTrailsRepository)
        inMemoryLevelsRepository = new InMemoryLevelsRepository(inMemoryIslandsRepository);
        sut = new CreateLevelUseCase(inMemoryLevelsRepository);
        island = makeIsland()
    });

    it("should be able to create a level ", async () => {
        
        const result = await sut.execute({
            description: "level description",
            islandId: island.id.toString(),
            name: "level",
            theme: "theme"
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryLevelsRepository.items[0]).toEqual(result.value.level);
    });

    it("should not be able to create two levels with same name", async () => {
        
        const level = await sut.execute({
            description: "level description",
            islandId: island.id.toString(),
            name: "level",
            theme: "theme"
        });

        expect(level.isRight()).toBe(true);

        const result = await sut.execute({
            description: "level description",
            islandId: island.id.toString(),
            name: "level",
            theme: "theme"
        });

        expect(result.isLeft());

        if(level.isRight())
            expect(inMemoryLevelsRepository.items.length).toEqual(1)
    });
});
