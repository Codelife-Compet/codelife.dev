import { Ponctuation, PonctuationProps } from "../../@entities/ponctuation"

export interface PonctuationsRepository { 
    create(data: PonctuationProps): Promise<Ponctuation>
    findById(id: string): Promise<Ponctuation | null>
    findPonctuationByUserName_LevelId(userName: string, levelId: string): Promise<Ponctuation | null>
}