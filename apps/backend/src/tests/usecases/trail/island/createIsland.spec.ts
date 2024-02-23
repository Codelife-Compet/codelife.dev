import { Trail } from "@/domain/trilhas/@entities/trail";
import { CreateIslandUseCase } from "@/domain/trilhas/island/usecases/createIsland/createIslandUseCase";
import { makeTrail } from "@/tests/factories/makeTrail";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryTrailsRepository } from "@/tests/repositories/in-memory-trail-repository";

let inMemoryIslandsRepository: InMemoryIslandsRepository;
let inMemoryTrailsRepository: InMemoryTrailsRepository;
let sut: CreateIslandUseCase;
let trail: Trail

describe("Create Island", () => {

    beforeEach(() => {
        inMemoryTrailsRepository = new InMemoryTrailsRepository();
        inMemoryIslandsRepository = new InMemoryIslandsRepository(inMemoryTrailsRepository);
        sut = new CreateIslandUseCase(inMemoryIslandsRepository);
        trail = makeTrail()
    });

    it("should be able to create a island ", async () => {
        
        const result = await sut.execute({
            name: "test_island",
            description: "test_description",
            theme: "test_theme",
            trailId: trail.id.toString()
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryIslandsRepository.items[0]).toEqual(result.value.island);
    });

    it("should not be able to create two islands with same name", async () => {

        const island = await sut.execute({
            name: "test_island",
            description: "test_description",
            theme: "test_theme",
            trailId: trail.id.toString()
        });

        expect(island.isRight()).toBe(true);
        
        const result = await sut.execute({
            name: "test_island",
            description: "test_description2",
            theme: "test_theme2",
            trailId: trail.id.toString()
        });

        expect(result.isLeft());

        if(island.isRight())
            expect(inMemoryIslandsRepository.items.length).toEqual(1)
    });
});
