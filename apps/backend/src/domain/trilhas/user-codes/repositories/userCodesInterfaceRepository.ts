import { UserCode, UserCodeProps } from "../../@entities/userCode"

export interface UserCodesRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: UserCodeProps): Promise<UserCode>
    findById(id: string): Promise<UserCode | null>
    findUserCodeBySlideId(slideId: string): Promise<UserCode | null>
    findByUserName(userName: string): Promise<UserCode | null>
}