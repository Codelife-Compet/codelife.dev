import { LoginUserUseCase } from "@/domain/usecases/source/login-user";
import { makeUser } from "@/tests/factories/make-user";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: LoginUserUseCase;

describe("Find User by Linkedin token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository()
        sut = new LoginUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to log in using a valid token", async () => {
        const test_user = makeUser({ github_token: "token" })

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            type: "github", token: "token"
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight()) {
            expect(result.value.user.email).toEqual(test_user.email)
        }
    });

    it("should be able to log in using an invalid token", async () => {
        const test_user = makeUser({ github_token: "token" })

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            type: "github", token: "token2"
        });

        expect(result.isLeft()).toBe(true);
    });

    it("should be able to log in using a valid email and password", async () => {
        const test_user = makeUser({ email: "email", password: "pass" })

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            type: "email", email: "email", password: "pass"
        });

        expect(result.isRight()).toBe(true);
    });

    it("should be able to log in using an invalid email", async () => {
        const test_user = makeUser({ email: "email", password: "pass" })

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            type: "email", email: "email2", password: "pass"
        });

        expect(result.isLeft()).toBe(true);
    });

    it("should be able to log in using an invalid password", async () => {
        const test_user = makeUser({ email: "email", password: "pass" })

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({
            type: "email", email: "email", password: "pass2"
        });

        expect(result.isLeft()).toBe(true);
    });

});
