import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { CreateUserUseCase } from "@/domain/usecases/source/create-user";
import { FindUserByTokenUseCase } from "@/domain/usecases/source/find-user-by-token";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: FindUserByTokenUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Find User by Linkedin token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new FindUserByTokenUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to find user with a valid token", async () => {
        await createUserUseCase.execute({
            email: "test_email",
            name: "test_name",
            token: "token",
            token_type: "github"
        });

        const result = await sut.execute({
            token: "token", type: "github"
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
    });

    it("should not be able to find user with an invalid linkedin token", async () => {
        await createUserUseCase.execute({
            email: "test_email",
            name: "test_name",
            token: "token",
            token_type: "github"
        });

        const result = await sut.execute({
            token: "token2", type: "github"
        });

        expect(result.isLeft()).toBe(true);
        expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    });
});
