import { ResourceNotFoundError } from "@/core/errors/resource-not-found-error";
import { FindUserByTokenUseCase } from "@/domain/users/usecases/source/find-user-by-token";
import { makeUser } from "@/tests/factories/make-user";
import { makeAccount } from "@/tests/factories/makeAccount";
import { InMemoryAccountsRepository } from "@/tests/repositories/in-memory-accounts-repository";
import { InMemoryUsersRepository } from "@/tests/repositories/in-memory-users-repository";

let inMemoryAccountsRepository: InMemoryAccountsRepository;
let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: FindUserByTokenUseCase;

describe("Find User by Linkedin token", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryAccountsRepository = new InMemoryAccountsRepository(inMemoryUsersRepository);
        sut = new FindUserByTokenUseCase(inMemoryUsersRepository);
    });

    it("should be able to find user with a valid token", async () => {

        const user = makeUser();
        const account = makeAccount({provider: "github", access_token: "token"});
        user.accounts?.push(account);

        inMemoryUsersRepository.items.push(user);
        inMemoryAccountsRepository.items.push(account);

        const result = await sut.execute({
            token: "token", type: "github"
        });

        expect(result.isRight()).toBe(true);
        if (result.isRight())
            expect(inMemoryUsersRepository.items[0]).toEqual(result.value.user);
    });

    it("should not be able to find user with an invalid token", async () => {
        
        const user = makeUser();
        const account = makeAccount({provider: "github", access_token: "token"});
        user.accounts?.push(account);

        inMemoryUsersRepository.items.push(user);
        inMemoryAccountsRepository.items.push(account);

        const result = await sut.execute({
            token: "token2", type: "github"
        });

        expect(result.isLeft()).toBe(true);
        expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    });
});
