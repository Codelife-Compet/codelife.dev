import { Island, IslandProps } from "../../@entities/island"

export interface IslandsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: IslandProps): Promise<Island>
    findById(id: string): Promise<Island | null>
    findByName(name: string): Promise<Island | null>
}