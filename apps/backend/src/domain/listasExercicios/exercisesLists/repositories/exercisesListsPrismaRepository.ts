import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ExercisesList, ExercisesListProps, UpdateExercisesListProps } from "../../@entities/exercisesLists";
import { ExercisesListsRepository } from "./exercisesListsRepository";
import { Exercise } from "../../@entities/exercise";
import { ExercisesPrismaRepository } from "../../exercises/repositories/exercisesPrismaRepository";

export class ExercisesListsPrismaRepository implements ExercisesListsRepository {

    async create(data: ExercisesListProps): Promise<ExercisesList> {

        const { exercises, ...restData } = data;

        const exercisesList = {
            ...await prisma.exercisesLists.create({ data: restData }),
            exercises
        }

        return new ExercisesList(exercisesList, new UniqueEntityID(exercisesList.id))
    }

    async delete(id: string): Promise<ExercisesList> {

        const exercisesList = await prisma.exercisesLists.delete({
            where: { id }
        });

        const exercises = await this.fetchExercises(exercisesList.id);

        return new ExercisesList({...exercisesList, exercises}, new UniqueEntityID(exercisesList.id));
    }

    async update(id: string, data: UpdateExercisesListProps): Promise<ExercisesList> {

        const exercisesList =  {
            ...await prisma.exercisesLists.update({
                where: { id },
                data: data
            }),
        }

        const exercises = await this.fetchExercises(exercisesList.id);

        return new ExercisesList({...exercisesList, exercises}, new UniqueEntityID(exercisesList.id))
    }

    async findById(id: string): Promise<ExercisesList | null> {

        const exercisesList = await prisma.exercisesLists.findUnique({
            where: { id }
        });

        if (!exercisesList) return null;

        const exercises = await this.fetchExercises(exercisesList.id);

        return new ExercisesList({ ...exercisesList, exercises }, new UniqueEntityID(exercisesList.id));
    }

    async findByTopic(topic: string): Promise<ExercisesList | null> {

        const exercisesList = await prisma.exercisesLists.findUnique({
            where: { topic }
        });

        if (!exercisesList) return null;

        const exercises = await this.fetchExercises(exercisesList.id);

        return new ExercisesList({ ...exercisesList, exercises }, new UniqueEntityID(exercisesList.id));
    }

    async fetchExercises(exercisesListId: string): Promise<Exercise[]> {

        const exercisesPrisma = await prisma.exercise.findMany({
            where: { id: exercisesListId }
        });

        const exercises = await Promise.all(exercisesPrisma.map(async exercise => {

            const exercisesRepository = new ExercisesPrismaRepository();
            const exerciseStatus = await exercisesRepository.fetchExerciseStatus(exercise.id);

            return new Exercise({ ...exercise, exerciseStatus }, new UniqueEntityID(exercise.id));
        }));

        return exercises
    }

    async addExercise(exerciseId: string, exercisesListTopic: string): Promise<Exercise[]> {

        const exercisesList = await prisma.exercisesLists.update({
            where: { topic: exercisesListTopic },
            data: {
                exercises: {
                    connect: { id: exerciseId }
                }
            }
        });

        const exercisesPrisma = await this.fetchExercises(exercisesList.id);

        const exercises = await Promise.all(exercisesPrisma.map(async exercise => {
                
                const exercisesRepository = new ExercisesPrismaRepository();
                const exerciseStatus = await exercisesRepository.fetchExerciseStatus(exercise.id.toString());
    
                return new Exercise({ ...exercise.data, exerciseStatus }, new UniqueEntityID(exercise.id.toString()));
        }));

        return exercises;
    }

    async removeExercise(exerciseId: string, exercisesListTopic: string): Promise<Exercise[]> {

        const exercisesList = await prisma.exercisesLists.update({
            where: { topic: exercisesListTopic },
            data: {
                exercises: {
                    disconnect: { id: exerciseId }
                }
            }
        });

        const exercisesPrisma = await this.fetchExercises(exercisesList.id);

        const exercises = await Promise.all(exercisesPrisma.map(async exercise => {
                
                const exercisesRepository = new ExercisesPrismaRepository();
                const exerciseStatus = await exercisesRepository.fetchExerciseStatus(exercise.id.toString());
    
                return new Exercise({ ...exercise.data, exerciseStatus }, new UniqueEntityID(exercise.id.toString()));
        }));

        return exercises;
    }
}

