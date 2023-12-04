import { CreateUserUseCase } from "@/domain/users/usecases/source/create-user";
import { makeUser } from "@/tests/factories/make-user";
import { InMemoryAccountsRepository } from "@/tests/repositories/in-memory-accounts-repository";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let inMemoryAccountsRepository: InMemoryAccountsRepository;
let sut: CreateUserUseCase;

describe("Find User by token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryAccountsRepository = new InMemoryAccountsRepository(inMemoryUsersRepository);

        sut = new CreateUserUseCase(inMemoryUsersRepository, inMemoryAccountsRepository);
    });

    it("should be able to log in using a valid token", async () => {
        const test_user = makeUser()

        await inMemoryUsersRepository.create(test_user)

        const result = await sut.execute({  });

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
