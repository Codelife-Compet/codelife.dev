import { Optional } from "@/core/types/optional"
import { Island, IslandProps, UpdateIslandProps } from "../../@entities/island"

export interface IslandsRepository { 
    create(data: IslandProps): Promise<Island>
    findById(id: string): Promise<Island | null>
    findByIslandName_TrailId(islandName: string, levelId: string): Promise<Island | null>
    list(): Promise<Island[]>
    countIslandsInTrail(trailId: string): Promise<number>
    listByTrailId(trailId: string): Promise<Island[]>
    delete(id: string): Promise<Island | null>
    update(id: string, data: UpdateIslandProps): Promise<Island | null>
}