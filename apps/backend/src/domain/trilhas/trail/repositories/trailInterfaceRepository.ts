import { Trail, TrailProps } from "../../@entities/trail"

export interface TrailsRepository {
    create(data: TrailProps): Promise<Trail>
    findById(id: string): Promise<Trail | null>
    findByName(name: string): Promise<Trail | null>
}