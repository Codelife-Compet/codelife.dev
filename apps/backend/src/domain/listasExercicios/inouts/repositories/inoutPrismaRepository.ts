import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Inout, InoutProps, UpdateInoutProps } from "../../@entities/inout";
import { InoutRepository } from "./inoutRepository";

export class InoutPrismaRepository implements InoutRepository {

    async create(data: InoutProps): Promise<Inout> {

        const inout = { ...await prisma.inout.create({ data }) }

        return new Inout(inout, new UniqueEntityID(inout.id))
    }

    async delete(id: string): Promise<Inout> {

        const inout = await prisma.inout.delete({ where: { id } });
        return new Inout(inout, new UniqueEntityID(inout.id));
    }

    async update(id: string, data: UpdateInoutProps): Promise<Inout> {

        const inout = await prisma.inout.update({
            where: { id },
            data
        });

        return new Inout(inout, new UniqueEntityID(inout.id));
    }

    async findById(id: string): Promise<Inout | null> {
        const inout = await prisma.inout.findUnique({
            where: { id }
        });

        if (!inout) return null;

        return new Inout(inout, new UniqueEntityID(inout.id));
    }

    async findByExerciseId(exerciseId: string): Promise<Inout | null> {
        const inout = await prisma.inout.findFirst({
            where: { exerciseId }
        });

        if (!inout) return null;

        return new Inout(inout, new UniqueEntityID(inout.id));

    }
}

