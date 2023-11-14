import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { LevelProps, Level } from "../../@entities/level";
import { LevelsRepository } from "./levelInterfaceRepository";

export class LevelsPrismaRepository implements LevelsRepository {

    async create(data: LevelProps): Promise<Level> {

        const { slides, ponctuations, ...restData } = data;

        const level = await prisma.level.create({ data: restData });

        return new Level(level, new UniqueEntityID(level.id))
    }

    async findById(id: string): Promise<Level | null> {
        const level = await prisma.level.findUnique({
            where: { id }
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }

    async findLevelById(id: string): Promise<Level | null> {
        const level = await prisma.level.findUnique({
            where: { id }
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }

    async findLevelByLevelName_IslandId(levelName: string, islandId: string): Promise<Level | null> {

        const level = await prisma.level.findUnique({
            where: {
                islandId,
                name: levelName
            }
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }
}

