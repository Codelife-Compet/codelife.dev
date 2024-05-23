import { Level, LevelProps, UpdateLevelProps } from "../../@entities/level"

export interface LevelsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: LevelProps): Promise<Level>
    findById(id: string): Promise<Level | null>
    findByLevelNameIslandId(levelName: string, levelId: string): Promise<Level | null>
    list(): Promise<Level[]>
    listByIslandId(islandId: string): Promise<Level[]>
    delete(id: string): Promise<Level | null>
    update(id: string, data: UpdateLevelProps): Promise<Level | null>
}