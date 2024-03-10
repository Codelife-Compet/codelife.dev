import { CreateTrailUseCase } from "@/domain/trilhas/trail/usecases/createIsland/createTrailUseCase";
import { InMemoryTrailsRepository } from "@/tests/repositories/in-memory-trail-repository";

let inMemoryTrailsRepository: InMemoryTrailsRepository;
let sut: CreateTrailUseCase;

describe("Create Trail", () => {
    beforeEach(() => {
        inMemoryTrailsRepository = new InMemoryTrailsRepository();
        sut = new CreateTrailUseCase(inMemoryTrailsRepository);
    });

    it("should be able to create a trail ", async () => {

        const result = await sut.execute({
            name: "test_trail",
            description: "test_description",
            theme: "test_theme",
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryTrailsRepository.items[0]).toEqual(result.value.trail);
    });

    it("should not be able to create two trails with same name", async () => {

        const trail = await sut.execute({
            name: "test_trail",
            description: "test_description",
            theme: "test_theme",
        });

        expect(trail.isRight()).toBe(true);
        
        const result = await sut.execute({
            name: "test_trail",
            description: "test_description",
            theme: "test_theme",
        });

        expect(result.isLeft());

        if(trail.isRight())
            expect(inMemoryTrailsRepository.items.length).toEqual(1)
    });
});
