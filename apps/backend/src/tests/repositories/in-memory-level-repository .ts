import { LevelProps, Level } from "@/domain/trilhas/@entities/level";
import { LevelsRepository } from "@/domain/trilhas/level/repositories/levelInterfaceRepository";
import { InMemoryIslandsRepository } from "./in-memory-island-repository";
import { Island } from "@/domain/trilhas/@entities/island";

export class InMemoryLevelsRepository implements LevelsRepository {

    public items: Level[] = []

    constructor(private islandsRepository: InMemoryIslandsRepository) {}
    
    async create(data: LevelProps): Promise<Level> {

        const level = new Level(data);
        this.items.push(level);

        const island = await this.islandsRepository.findById(level.islandId)
        this.islandsRepository.items[this.islandsRepository.items.indexOf(island as Island)].levels?.push(level) 

        return level;
    }

    async findById(id: string): Promise<Level | null> {
        const level = this.items.find(level => level.id.toString() === id)

        return (level ? level : null)
    }

    async findLevelByLevelName_IslandId(levelName: string, islandId: string): Promise<Level | null> {
        const level = this.items.find(level => level.name === levelName && level.islandId === islandId)

        return (level ? level : null)
    }

}