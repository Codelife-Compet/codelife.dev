import { Level, LevelProps } from "../../@entities/level"

export interface LevelsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: LevelProps): Promise<Level>
    findById(id: string): Promise<Level | null>
    findLevelByLevelName_IslandId(levelName: string, levelId: string): Promise<Level | null>
}