import { Island, IslandProps, UpdateIslandProps } from "../../@entities/island"

export interface IslandsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: IslandProps): Promise<Island>
    findById(id: string): Promise<Island | null>
    findByIslandName_TrailId(islandName: string, levelId: string): Promise<Island | null>
    list(): Promise<Island[]>
    delete(id: string): Promise<Island | null>
    update(id: string, data: UpdateIslandProps): Promise<Island | null>
}