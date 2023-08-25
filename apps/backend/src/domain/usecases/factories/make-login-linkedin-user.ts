import { LoginUserLinkedinUseCase } from "../source/login-user-linkedin"

export function makeLoginUserLinkedinUseCase() {
    const useCase = new LoginUserLinkedinUseCase()

    return useCase
}