import { LoginUserGithubUseCase } from "../source/login-user-github"

export function makeLoginUserGithubUseCase() {
    const useCase = new LoginUserGithubUseCase()

    return useCase
}