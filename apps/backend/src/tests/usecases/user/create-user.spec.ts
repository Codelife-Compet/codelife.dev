import { Account } from "@/domain/users/entities/acccount";
import { CreateUserUseCase } from "@/domain/users/usecases/source/create-user";
import { makeUser } from "@/tests/factories/make-user";
import { makeAccount } from "@/tests/factories/makeAccount";
import { InMemoryAccountsRepository } from "@/tests/repositories/in-memory-accounts-repository";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let inMemoryAccountsRepository: InMemoryAccountsRepository;
let sut: CreateUserUseCase;

describe("Create User", () => {

    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryAccountsRepository = new InMemoryAccountsRepository(inMemoryUsersRepository);

        sut = new CreateUserUseCase(inMemoryUsersRepository, inMemoryAccountsRepository);
    });

    it("should be able to create a user", async () => {

        const result = await sut.execute({
            user: {
                name: "test_name",
                email: "test_email",
                image: "test_image"
            }, account: makeAccount()
        })

        expect(result.isRight()).toBe(true);

        if (result.isRight()) {
            inMemoryUsersRepository.items.push(result.value.user);
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
        }
    });

    it("should be able to create more than one different account per user", async () => {

        const user = await sut.execute({
            user: makeUser({ email: 'email1' }),
            account: makeAccount({ provider: "github" })
        });

        expect(user.isRight()).toBe(true);

        const result = await sut.execute({
            user: makeUser({ email: 'email1' }),
            account: makeAccount({ provider: "github" })
        });

        expect(result.isLeft()).toBe(true);
        if(result.isRight())
            expect(inMemoryAccountsRepository.items[0]).toEqual((result.value.user?.accounts as Account[])[0])
    });

    it("should not be able to create a user with the same account", async () => {

        const user = await sut.execute({
            user: makeUser({ email: 'email1' }),
            account: makeAccount({ provider: "github" })
        });

        expect(user.isRight()).toBe(true);

        const result = await sut.execute({
            user: makeUser({ email: 'email1' }),
            account: makeAccount({ provider: "google" })
        });

        expect(result.isLeft()).toBe(false);
    });
});
