import { Island, IslandProps } from "../../@entities/island"

export interface IslandsRepository { 
    create(data: IslandProps): Promise<Island>
    findById(id: string): Promise<Island | null>
    findByName(name: string): Promise<Island | null>
}