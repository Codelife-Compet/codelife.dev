import { CreateUserUseCase } from '@/domain/usecases/source/create-user'
import { InMemoryUsersRepository } from '@/tests/repositories/in-memory-users-repository'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreateUserUseCase

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to create a user', async () => {
    const result = await sut.execute({
      email: "test_email",
      name: "test_name",
      github_token: "test_token",
      linkedin_token: "test_token"
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryUsersRepository.items[0]).toEqual(result.value?.user)
  })
})
