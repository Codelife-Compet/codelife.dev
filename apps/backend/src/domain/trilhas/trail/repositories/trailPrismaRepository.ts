import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { TrailProps, Trail } from "../../@entities/trail";
import { TrailsRepository } from "./trailInterfaceRepository";

export class TrailsPrismaRepository implements TrailsRepository {

    async create(data: TrailProps): Promise<Trail> {

        const { islands, ...restData } = data;

        const trail = await prisma.trail.create({ data: restData });

        return new Trail(trail, new UniqueEntityID(trail.id))
    }

    async findById(id: string): Promise<Trail | null> {
        const trail = await prisma.trail.findUnique({
            where: { id }
        });

        return (trail ? new Trail(trail, new UniqueEntityID(trail.id)) : null);
    }

    async findByName(name: string): Promise<Trail | null> {
        const trail = await prisma.trail.findFirst({
            where: { name }
        });

        return (trail ? new Trail(trail, new UniqueEntityID(trail.id)) : null);
    }
}

