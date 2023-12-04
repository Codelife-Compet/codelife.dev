import { Trail } from "@/domain/trilhas/@entities/trail";
import { CreateIslandUseCase } from "@/domain/trilhas/island/usecases/createIsland/createIslandUseCase";
import { makeTrail } from "@/tests/factories/makeTrail";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";

let inMemoryIslandsRepository: InMemoryIslandsRepository;
let sut: CreateIslandUseCase;
let trail: Trail

describe("Create Island", () => {
    beforeEach(() => {
        inMemoryIslandsRepository = new InMemoryIslandsRepository();
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
        await sut.execute({
            name: "test_island",
            description: "test_description",
            theme: "test_theme",
            trailId: trail.id.toString()
        });
        const result = await sut.execute({
            name: "test_island",
            description: "test_description2",
            theme: "test_theme2",
            trailId: trail.id.toString()
        });

        expect(result.isLeft());
    });
});
