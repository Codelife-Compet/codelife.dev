import { User } from "@/domain/users/entities/user";
import { CreateUserUseCase } from "@/domain/users/usecases/source/create-user";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateUserUseCase;

describe("Create User", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new CreateUserUseCase(inMemoryUsersRepository);
    });

    it("should be able to create a user ", async () => {
        const result = await sut.execute({
            email: "test_email",
            name: "test_name",
            token: "test_token",
            token_type: "facebook",
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
    });

    it("should not be able to create two users with same token", async () => {
        await sut.execute({
            email: "test_email",
            name: "test_name",
            token: "facebook",
            token_type: "facebook"
        });

        const result = await sut.execute({
            email: "test_email2",
            name: "test_name2",
            token: "facebook",
            token_type: "facebook"
        });

        expect(result.isLeft());
    });

    it("should not be able to create two users with same email", async () => {
        
        const user = new User({
            email: "test_email",
            name: "test_name",
            github_token: "test_token",
            role: "USER"
        });

        inMemoryUsersRepository.items.push(user);
        
        const result = await sut.execute({
            email: "test_email",
            name: "test_name2",
            token: "test_token",
            token_type: "facebook"
        });

        expect(result.isLeft());
    });

});
