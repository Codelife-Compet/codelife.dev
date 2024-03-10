import { Slide } from "@/domain/trilhas/@entities/slide";
import { CreateUserCodeUseCase } from "@/domain/trilhas/user-codes/usecases/createUserCodes/createUserCodeUseCase";
import { makeSlide } from "@/tests/factories/makeSlide";
import { InMemoryIslandsRepository } from "@/tests/repositories/in-memory-island-repository";
import { InMemoryLevelsRepository } from "@/tests/repositories/in-memory-level-repository ";
import { InMemorySlidesRepository } from "@/tests/repositories/in-memory-slides-repository ";
import { InMemoryTrailsRepository } from "@/tests/repositories/in-memory-trail-repository";
import { InMemoryUserCodesRepository } from "@/tests/repositories/in-memory-usercode-repository ";

let inMemoryTrailsRepository: InMemoryTrailsRepository
let inMemoryIslandsRepository: InMemoryIslandsRepository
let inMemoryLevelsRepository: InMemoryLevelsRepository
let inMemoryUserCodesRepository: InMemoryUserCodesRepository;
let inMemorySlidesRepository: InMemorySlidesRepository
let sut: CreateUserCodeUseCase;
let slide: Slide

describe("Create UserCode", () => {

    beforeEach(async () => {
        inMemoryTrailsRepository = new InMemoryTrailsRepository()
        inMemoryIslandsRepository = new InMemoryIslandsRepository(inMemoryTrailsRepository)
        inMemoryLevelsRepository = new InMemoryLevelsRepository(inMemoryIslandsRepository);
        inMemorySlidesRepository = new InMemorySlidesRepository(inMemoryLevelsRepository);
        inMemoryUserCodesRepository = new InMemoryUserCodesRepository(inMemorySlidesRepository);
        sut = new CreateUserCodeUseCase(inMemoryUserCodesRepository);

        slide = makeSlide()
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

        const userCode = await sut.execute({
            slideId: slide.id.toString(),
            userName: "User Name",
        });

        expect(userCode.isRight()).toBe(true);

        const result = await sut.execute({
            slideId: slide.id.toString(),
            userName: "User Name",
        });

        expect(result.isLeft());

        if(userCode.isRight())
            expect(inMemoryUserCodesRepository.items.length).toEqual(1)
    });
});
