import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { LevelProps, Level, UpdateLevelProps } from "../../@entities/level";
import { LevelsRepository } from "./levelInterfaceRepository";

export class LevelsPrismaRepository implements LevelsRepository {

    async list(): Promise<Level[]> {
        const levels = await prisma.level.findMany();

        return levels.map(level => new Level(level, new UniqueEntityID(level.id)));
    }

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

    async findByLevelNameIslandId(levelName: string, islandId: string): Promise<Level | null> {

        const level = await prisma.level.findUnique({
            where: {
                islandId,
                name: levelName
            }
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }

    async delete(id: string): Promise<Level | null> {
        const level = await prisma.level.delete({
            where: { id }
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }

    async update(id: string, data: UpdateLevelProps): Promise<Level | null> {

        const level = await prisma.level.update({
            where: { id },
            data
        });

        return (level ? new Level(level, new UniqueEntityID(level.id)) : null);
    }
}

