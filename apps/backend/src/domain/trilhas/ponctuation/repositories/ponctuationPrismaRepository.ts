import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { PonctuationProps, Ponctuation, UpdatePonctuationProps } from "../../@entities/ponctuation";
import { PonctuationsRepository } from "./ponctuationInterfaceRepository";

export class PonctuationsPrismaRepository implements PonctuationsRepository {

    async create(data: PonctuationProps): Promise<Ponctuation> {

        const ponctuation = await prisma.ponctuation.create({ data });

        return new Ponctuation(ponctuation, new UniqueEntityID(ponctuation.id))
    }

    async findById(id: string): Promise<Ponctuation | null> {
        const ponctuation = await prisma.ponctuation.findUnique({
            where: { id }
        });

        return (ponctuation ? new Ponctuation(ponctuation, new UniqueEntityID(ponctuation.id)) : null);
    }

    async findPonctuationByUserName_LevelId(userName: string, levelId: string): Promise<Ponctuation | null> {
        const ponctuation = await prisma.ponctuation.findUnique({
            where: Object.assign({ id: undefined }, { levelId, userName })
        });

        return (ponctuation ? new Ponctuation(ponctuation, new UniqueEntityID(ponctuation.id)) : null);
    }

    async list(): Promise<Ponctuation[]> {
        const ponctuations = await prisma.ponctuation.findMany();

        return ponctuations.map(ponctuation => new Ponctuation(ponctuation, new UniqueEntityID(ponctuation.id)));
    }

    async delete(id: string): Promise<Ponctuation | null> {
        const ponctuation = await prisma.ponctuation.delete({
            where: { id }
        });

        return (ponctuation ? new Ponctuation(ponctuation, new UniqueEntityID(id)) : null);
    }

    async update(id: string, data: UpdatePonctuationProps): Promise<Ponctuation | null> {
        const ponctuation = await prisma.ponctuation.update({
            where: { id },
            data
        });

        return (ponctuation ? new Ponctuation(ponctuation, new UniqueEntityID(id)) : null);
    }
}

