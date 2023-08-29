import { ResourceAlreadyExistsError } from "@/core/errors/resource-already-exists-error";
import { CreateUserUseCase } from "@/domain/usecases/source/create-user";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase;

describe("Create User", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new CreateUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to create a user", async () => {
        const result = await sut.execute({
            email: "test_email",
            name: "test_name",
            github_token: "test_token",
            linkedin_token: "test_token",
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
    });

    it("should not be able to create two users with same github token", async () => {
        await sut.execute({
            email: "test_email",
            name: "test_name",
            github_token: "test_token",
        });

        const result = await sut.execute({
            email: "test_email2",
            name: "test_name2",
            github_token: "test_token",
        });

        expect(result.isLeft());
        expect(result.value).toBeInstanceOf(ResourceAlreadyExistsError);
    });

    it("should not be able to create two users with same linkedin token", async () => {
        await sut.execute({
            email: "test_email",
            name: "test_name",
            linkedin_token: "test_token",
        });

        const result = await sut.execute({
            email: "test_email2",
            name: "test_name2",
            linkedin_token: "test_token",
        });

        expect(result.isLeft());
        expect(result.value).toBeInstanceOf(ResourceAlreadyExistsError);
    });
});
