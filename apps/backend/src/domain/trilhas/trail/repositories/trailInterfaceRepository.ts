import { Trail, TrailProps, UpdateTrailProps } from "../../@entities/trail"

export interface TrailsRepository {
    create(data: TrailProps): Promise<Trail>
    findById(id: string): Promise<Trail | null>
    findByName(name: string): Promise<Trail | null>
    list(): Promise<Trail[]>
    delete(id: string): Promise<Trail | null>
    update(id: string, data: UpdateTrailProps): Promise<Trail | null>
}