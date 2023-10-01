import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { IslandProps, Island } from "../../@entities/island";
import { IslandsRepository } from "./islandInterfaceRepository";

export class IslandsPrismaRepository implements IslandsRepository {

    async create(data: IslandProps): Promise<Island> {

        const { levels, ...restData } = data;

        const island = await prisma.island.create({ data: restData });

        return new Island(island, new UniqueEntityID(island.id))
    }

    async findById(id: string): Promise<Island | null> {
        const island = await prisma.island.findUnique({
            where: { id }
        });

        return (island ? new Island(island, new UniqueEntityID(island.id)) : null);
    }

    async findByName(name: string): Promise<Island | null> {
        const island = await prisma.island.findFirst({
            where: { name }
        });

        return (island ? new Island(island, new UniqueEntityID(island.id)) : null);
    }
}

