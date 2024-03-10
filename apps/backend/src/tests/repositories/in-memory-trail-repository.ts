import { TrailProps, Trail } from "@/domain/trilhas/@entities/trail";
import { TrailsRepository } from "@/domain/trilhas/trail/repositories/trailInterfaceRepository";

export class InMemoryTrailsRepository implements TrailsRepository {

    public items: Trail[] = []

    async create(data: TrailProps): Promise<Trail> {

        const trail = new Trail(data);
        this.items.push(trail);

        return trail;
    }

    async save(trail: Trail): Promise<Trail> {

        const index = this.items.findIndex(item => item.id === trail.id)

        this.items[index] = trail

        return trail
    }

    async findById(id: string): Promise<Trail | null> {
        const trail = this.items.find(trail => trail.id.toString() === id)

        return (trail ? trail : null)
    }

    async findByName(name: string): Promise<Trail | null> {
        const trail = this.items.find(trail => trail.name === name)

        return (trail ? trail : null)
    }

}