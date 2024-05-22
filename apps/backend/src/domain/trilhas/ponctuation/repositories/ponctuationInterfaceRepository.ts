import { Ponctuation, PonctuationProps, UpdatePonctuationProps } from "../../@entities/ponctuation"

export interface PonctuationsRepository { 
    create(data: PonctuationProps): Promise<Ponctuation>
    findById(id: string): Promise<Ponctuation | null>
    findPonctuationByUserName_LevelId(userName: string, levelId: string): Promise<Ponctuation | null>
    delete(id: string): Promise<Ponctuation | null>
    update(id: string, data: UpdatePonctuationProps): Promise<Ponctuation | null>
    list(): Promise<Ponctuation[]>
}