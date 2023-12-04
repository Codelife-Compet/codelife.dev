import { IslandProps, Island } from "@/domain/trilhas/@entities/island";
import { IslandsRepository } from "@/domain/trilhas/island/repositories/islandInterfaceRepository";
import { InMemoryTrailsRepository } from "./in-memory-trail-repository";

export class InMemoryIslandsRepository implements IslandsRepository {

    public items: Island[] = []

    constructor(private inMemoryTrailsRepository: InMemoryTrailsRepository) { }

    async create(data: Island): Promise<Island> {

        this.items.push(data);

        const trail = await this.inMemoryTrailsRepository.findById(data.trailId.toString())
        if (trail) {
            trail.islands?.push(data)
            this.inMemoryTrailsRepository.save(trail)
        }
        return data;
    }

    async save(island: Island): Promise<Island> {

        const index = this.items.findIndex(item => item.id === island.id)

        this.items[index] = island

        return island
    }

    async findById(id: string): Promise<Island | null> {
        const island = this.items.find(island => island.id.toString() === id)

        return (island ? island : null)
    }

    async findByName(name: string): Promise<Island | null> {
        const island = this.items.find(island => island.name === name)

        return (island ? island : null)
    }

}