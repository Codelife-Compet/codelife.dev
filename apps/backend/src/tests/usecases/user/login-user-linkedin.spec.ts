import { LoginUserLinkedinUseCase } from "@/domain/usecases/source/login-user-linkedin";
import { makeUser } from "@/tests/factories/make-user";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: LoginUserLinkedinUseCase;

describe("Find User by Linkedin token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new LoginUserLinkedinUseCase(inMemoryUsersRepository);
    });

    it("should be able to log in using a valid likedin token", async () => {
        const test_user = makeUser({linkedin_token: "test_token"})

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            linkedin_token: "test_token",
        });

        expect(result.isRight()).toBe(true);
        if(result.isRight()) {
            expect(result.value.user.email).toEqual(test_user.email)
        }
    });

   
});
