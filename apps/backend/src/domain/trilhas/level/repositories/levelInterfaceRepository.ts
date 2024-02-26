import { Level, LevelProps } from "../../@entities/level"

export interface LevelsRepository { 
    create(data: LevelProps): Promise<Level>
    findById(id: string): Promise<Level | null>
    findLevelByLevelName_IslandId(levelName: string, levelId: string): Promise<Level | null>
}