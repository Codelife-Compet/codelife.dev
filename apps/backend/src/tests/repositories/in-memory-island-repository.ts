import { IslandProps, Island } from "@/domain/trilhas/@entities/island";
import { IslandsRepository } from "@/domain/trilhas/island/repositories/islandInterfaceRepository";
import { InMemoryLevelsRepository } from "./in-memory-level-repository ";

export class InMemoryIslandsRepository implements IslandsRepository {

    public items: Island[] = []

    async create(data: IslandProps): Promise<Island> {

        const island = new Island(data);
        this.items.push(island);

        return island;
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