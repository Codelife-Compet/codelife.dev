import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error";
import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { CreateUserUseCase } from "@/domain/usecases/source/create-user";
import { FindUserByLinkedinTokenUseCase } from "@/domain/usecases/source/find-user-by-linkedin";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: FindUserByLinkedinTokenUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Find User by Linkedin token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new FindUserByLinkedinTokenUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to find user with a valid linkedin token", async () => {
        await createUserUseCase.execute({
            email: "test_email",
            name: "test_name",
            linkedin_token: "test_token",
        });

        const result = await sut.execute({
            linkedin_token: "test_token",
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
    });

    it("should not be able to find user with an invalid linkedin token", async () => {
        await createUserUseCase.execute({
            email: "test_email",
            name: "test_name",
            linkedin_token: "test_token",
        });

        const result = await sut.execute({
            linkedin_token: "test_token2",
        });

        expect(result.isLeft()).toBe(true);
        expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    });
});
