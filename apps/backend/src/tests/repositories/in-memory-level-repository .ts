import { LevelProps, Level } from "@/domain/trilhas/@entities/level";
import { LevelsRepository } from "@/domain/trilhas/level/repositories/levelInterfaceRepository";
import { InMemoryIslandsRepository } from "./in-memory-island-repository";

export class InMemoryLevelsRepository implements LevelsRepository {

    public items: Level[] = []

    constructor(private inMemoryIslandsRepository: InMemoryIslandsRepository) { }

    async create(data: Level): Promise<Level> {

        const level = new Level(data);
        this.items.push(level);

        const island = await this.inMemoryIslandsRepository.findById(data.islandId.toString())
        if (island) {
            island.levels?.push(data)
            this.inMemoryIslandsRepository.save(island)
        }

        return level;
    }

    async save(level: Level): Promise<Level> {

        const index = this.items.findIndex(item => item.id === level.id)

        this.items[index] = level

        return level
    }

    async findById(id: string): Promise<Level | null> {
        const level = this.items.find(level => level.id.toString() === id)

        return (level ? level : null)
    }

    async findByLevelNameIslandId(levelName: string, islandId: string): Promise<Level | null> {
        const level = this.items.find(level => level.name === levelName && level.islandId === islandId)

        return (level ? level : null)
    }

}