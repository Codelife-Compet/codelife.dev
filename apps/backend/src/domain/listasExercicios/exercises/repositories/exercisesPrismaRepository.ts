import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Exercise, ExerciseProps } from "../../@entities/exercise";
import { ExerciseStatus } from "../../@entities/exerciseStatus";
import { ExercisesRepository } from "./exercisesRepository";
import { Optional } from "@/core/types/optional";
import { Inout } from "../../@entities/inout";

export class ExercisesPrismaRepository implements ExercisesRepository {

    async create(data: ExerciseProps): Promise<Exercise> {

        const { exerciseStatus, inouts , ...restData } = data;

        const exercise = {
            ...await prisma.exercise.create({ data: restData }),
            exerciseStatus,
            inouts
        }

        return new Exercise(exercise, new UniqueEntityID(exercise.id))
    }

    async delete(id: string): Promise<Exercise> {

        const exercise = await prisma.exercise.delete({ where: { id } });

        const exerciseStatus = await this.fetchExerciseStatus(id);
        const inouts = await this.fetchInouts(id);

        return new Exercise({...exercise, exerciseStatus, inouts}, new UniqueEntityID(exercise.id))

    }
    async update(id: string, data: Optional<ExerciseProps, "difficulty" | "exercisesListId" | "link" | "name">): Promise<Exercise> {

        const { exerciseStatus, inouts , ...restData } = data;

        const exercise = await prisma.exercise.update({
            where: { id },
            data: {
                ...restData,
                // exerciseStatus: {
                //     connect: exerciseStatus
                // }
            }
        });

        const exerciseStatusPrisma = await this.fetchExerciseStatus(id);
        
        return new Exercise({...exercise, exerciseStatus, inouts}, new UniqueEntityID(exercise.id))
    }

    async fetchExerciseStatus(exerciseId: string): Promise<ExerciseStatus[]> {

        const exerciseStatus = await prisma.exerciseStatus.findMany({
            where: { id: exerciseId }
        });

        return exerciseStatus.map(exerciseSt => new ExerciseStatus({ ...exerciseSt }, new UniqueEntityID(exerciseSt.id)));
    }

    async findById(id: string): Promise<Exercise | null> {

        const exercise = await prisma.exercise.findUnique({
            where: { id }
        });

        if (!exercise) return null;

        const exerciseStatus = await this.fetchExerciseStatus(exercise.id);
        const inouts = await this.fetchInouts(exercise.id);

        return new Exercise({...exercise, exerciseStatus, inouts }, new UniqueEntityID(exercise.id));
    }

    async findByName(name: string): Promise<Exercise | null> {

        const exercise = await prisma.exercise.findUnique({
            where: { name }
        });

        if (!exercise) return null;

        const exerciseStatus = await this.fetchExerciseStatus(exercise.id);
        const inouts = await this.fetchInouts(exercise.id);

        return new Exercise({...exercise, exerciseStatus, inouts }, new UniqueEntityID(exercise.id));
    }

    async addExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]> {

        const exercise = await prisma.exercise.update({
            where: { name: exerciseName },
            data: {
                exerciseStatus: {
                    connect: {
                        id: exerciseStatusId
                    }
                }
            }
        });

        const exercisestatus = await this.fetchExerciseStatus(exercise.id);

        return exercisestatus;
    }

    async removeExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]> {
         
        const exercise = await prisma.exercise.update({
            where: { name: exerciseName },
            data: {
                exerciseStatus: {
                    disconnect: {
                        id: exerciseStatusId
                    }
                }
            }
        });

        const exercisestatus = await this.fetchExerciseStatus(exercise.id);

        return exercisestatus;
    }

    async fetchInouts(exerciseId: string): Promise<Inout[]> {

        const inout = await prisma.inout.findMany({
            where: { id: exerciseId }
        });

        return inout.map(int => new Inout({ ...int }, new UniqueEntityID(int.id)));
    }

    async addInout(inoutId: string, exerciseName: string): Promise<Inout[]> {
        
        const exercise = await prisma.exercise.update({
            where: { name: exerciseName },
            data: {
                inouts: {
                    connect: {
                        id: inoutId
                    }
                }
            }
        });

        const inouts = await this.fetchInouts(exercise.id);

        return inouts;
    }
    
    async removeInout(inoutId: string, exerciseName: string): Promise<Inout[]> {
        
        const exercise = await prisma.exercise.update({
            where: { name: exerciseName },
            data: {
                inouts: {
                    disconnect: {
                        id: inoutId
                    }
                }
            }
        });

        const inouts = await this.fetchInouts(exercise.id);

        return inouts;
    }
}

