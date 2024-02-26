import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ExerciseStatusRepository } from "./exerciseStatusRepository";
import { ExerciseStatus, ExerciseStatusProps, UpdateExerciseStatusProps } from "../../@entities/exerciseStatus";

export class ExerciseStatusPrismaRepository implements ExerciseStatusRepository {

    async create(data: ExerciseStatusProps): Promise<ExerciseStatus> {

        const exerciseStatus = { ...await prisma.exerciseStatus.create({ data }) }

        return new ExerciseStatus(exerciseStatus, new UniqueEntityID(exerciseStatus.id))
    }

    async delete(id: string): Promise<ExerciseStatus> {

        const exerciseStatus = await prisma.exerciseStatus.delete({ where: { id } });
        return new ExerciseStatus(exerciseStatus, new UniqueEntityID(exerciseStatus.id));
    }

    async update(id: string, data: UpdateExerciseStatusProps): Promise<ExerciseStatus> {

        const exerciseStatus = await prisma.exerciseStatus.update({
            where: { id },
            data
        });

        return new ExerciseStatus(exerciseStatus, new UniqueEntityID(exerciseStatus.id));
    }

    async findById(id: string): Promise<ExerciseStatus | null> {
        const exerciseStatus = await prisma.exerciseStatus.findUnique({
            where: { id }
        });

        if (!exerciseStatus) return null;

        return new ExerciseStatus(exerciseStatus, new UniqueEntityID(exerciseStatus.id));
    }

    async findByUserName(userName: string): Promise<ExerciseStatus | null> {
        const exerciseStatus = await prisma.exerciseStatus.findFirst({
            where: { userName }
        });

        if (!exerciseStatus) return null;

        return new ExerciseStatus(exerciseStatus, new UniqueEntityID(exerciseStatus.id));

    }
}

