import { UpdateUserCodeProps, UserCode, UserCodeProps } from "../../@entities/userCode"

export interface UserCodesRepository { 
    create(data: UserCodeProps): Promise<UserCode>
    findById(id: string): Promise<UserCode | null>
    findUserCodeBySlideId(slideId: string): Promise<UserCode | null>
    findByUserName(userName: string, slideId: string): Promise<UserCode | null>
    list(): Promise<UserCode[]>
    listBySlideId(slideId: string): Promise<UserCode[]>
    update(id: string, data: UpdateUserCodeProps): Promise<UserCode | null>
    delete(id: string): Promise<UserCode | null>
}