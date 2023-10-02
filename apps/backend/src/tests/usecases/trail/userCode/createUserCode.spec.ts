import { Island } from "@/domain/trilhas/@entities/island";
import { Level } from "@/domain/trilhas/@entities/level";
import { Slide } from "@/domain/trilhas/@entities/slide";
import { CreateUserCodeUseCase } from "@/domain/trilhas/user-codes/usecases/createUserCodes/createUserCodeUseCase";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryLevelsRepository } from "@/tests/repositories/in-memory-level-repository ";
import { InMemorySlidesRepository } from "@/tests/repositories/in-memory-slides-repository ";
import { InMemoryUserCodesRepository } from "@/tests/repositories/in-memory-usercode-repository ";

let inMemoryIslandsRepository: InMemoryIslandsRepository
let inMemoryLevelsRepository: InMemoryLevelsRepository
let inMemoryUserCodesRepository: InMemoryUserCodesRepository;
let inMemorySlidesRepository: InMemorySlidesRepository
let sut: CreateUserCodeUseCase;
let slide: Slide
let level: Level
let island: Island

describe("Create UserCode", () => {

    beforeEach(async () => {
        inMemoryIslandsRepository = new InMemoryIslandsRepository()
        inMemoryLevelsRepository = new InMemoryLevelsRepository(inMemoryIslandsRepository)
        inMemorySlidesRepository = new InMemorySlidesRepository(inMemoryLevelsRepository)
        inMemoryUserCodesRepository = new InMemoryUserCodesRepository(inMemorySlidesRepository);
        sut = new CreateUserCodeUseCase(inMemoryUserCodesRepository);

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

        slide = await inMemorySlidesRepository.create({
            name: "Slide name",
            baseCode: "Slide base code",
            description: "Slide Description",
            levelId: level.id.toString(),
            theme: "Slide Theme"
        })
    });

    it("should be able to create a usercode ", async () => {
        const result = await sut.execute({
            slideId: slide.id.toString(),
            userName: "User Name",
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUserCodesRepository.items[0]).toEqual(result.value.usercode);
    });

    it("should not be able to create two usercodes with same name", async () => {
        await sut.execute({
            slideId: slide.id.toString(),
            userName: "User Name",
        });

        const result = await sut.execute({
            slideId: slide.id.toString(),
            userName: "User Name",
        });

        expect(result.isLeft());
    });
});
