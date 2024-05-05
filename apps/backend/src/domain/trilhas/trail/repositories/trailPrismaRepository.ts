import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { TrailProps, Trail, UpdateTrailProps } from "../../@entities/trail";
import { TrailsRepository } from "./trailInterfaceRepository";

export class TrailsPrismaRepository implements TrailsRepository {

    async list(): Promise<Trail[]> {
        const trails = await prisma.trail.findMany();

        return trails.map(trail => new Trail(trail, new UniqueEntityID(trail.id)));
    }

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

    async delete(id: string): Promise<Trail | null> {
        const trail = await prisma.trail.delete({
            where: { id }
        });

        return (trail ? new Trail(trail, new UniqueEntityID(trail.id)) : null);
    }

    async update(id: string, data: UpdateTrailProps): Promise<Trail | null> {

        const trail = await prisma.trail.update({
            where: { id }, 
            data
        });

        return (trail ? new Trail(trail, new UniqueEntityID(trail.id)) : null);
    }
}

