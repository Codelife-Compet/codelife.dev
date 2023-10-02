import { CreateIslandUseCase } from "@/domain/trilhas/island/usecases/createSlide/createIslandUseCase";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";

let inMemoryIslandsRepository: InMemoryIslandsRepository;
let sut: CreateIslandUseCase;

describe("Create Island", () => {
    beforeEach(() => {
        inMemoryIslandsRepository = new InMemoryIslandsRepository();
        sut = new CreateIslandUseCase(inMemoryIslandsRepository);
    });

    it("should be able to create a island ", async () => {
        const result = await sut.execute({
            name: "test_island",
            description: "test_description",
            theme: "test_theme",
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
        });
        const result = await sut.execute({
            name: "test_island",
            description: "test_description2",
            theme: "test_theme2",
        });

        expect(result.isLeft());
    });
});
