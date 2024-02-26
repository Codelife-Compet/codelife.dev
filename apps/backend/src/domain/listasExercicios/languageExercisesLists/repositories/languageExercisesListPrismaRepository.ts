import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { LanguageExercisesListsRepository } from "./languageExercisesListRepository";
import { LanguageExercisesList, LanguageExercisesListProps, UpdateLanguageExercisesListProps } from "../../@entities/languageExercisesLists";
import { ExercisesList } from "../../@entities/exercisesLists";
import { ExercisesListsPrismaRepository } from "../../exercisesLists/repositories/exercisesListsPrismaRepository";

export class LanguageExercisesListsPrismaRepository implements LanguageExercisesListsRepository {

    async create(data: LanguageExercisesListProps): Promise<LanguageExercisesList> {

        const { exercisesLists, ...restData } = data;

        const languageExercisesList = { 
            ...await prisma.languageExercisesLists.create({ data: restData }),
            exercisesLists
        }

        return new LanguageExercisesList(languageExercisesList, new UniqueEntityID(languageExercisesList.id))
    }

    async update(id: string, data: UpdateLanguageExercisesListProps): Promise<LanguageExercisesList> {

        const languageExercisesList = { 
            ...await prisma.languageExercisesLists.update({ where: { id }, data }),
        }

        return new LanguageExercisesList(languageExercisesList, new UniqueEntityID(languageExercisesList.id))
    }

    async delete(id: string): Promise<LanguageExercisesList> {

        const languageExercisesList = await prisma.languageExercisesLists.delete({
            where: { id }
        });

        return new LanguageExercisesList(languageExercisesList, new UniqueEntityID(languageExercisesList.id));
    }

    async fetchExercisesLists(id: string): Promise<ExercisesList[]> {

        const exercisesListsPrisma = await prisma.exercisesLists.findMany({
            where: { id }
        });

        const exercisesLists = await Promise.all(exercisesListsPrisma.map(async exercisesList => {

            const exercisesListsPrismaRepository = new ExercisesListsPrismaRepository();
            const exercises = await exercisesListsPrismaRepository.fetchExercises(exercisesList.id);

            return new ExercisesList({ ...exercisesList, exercises }, new UniqueEntityID(exercisesList.id));
        }));

        return exercisesLists
    }

    async findById(id: string): Promise<LanguageExercisesList | null> {

        const languageExercisesList = await prisma.languageExercisesLists.findUnique({
            where: { id }
        });

        if (!languageExercisesList) return null;

        return new LanguageExercisesList(languageExercisesList, new UniqueEntityID(languageExercisesList.id));
    }

    async findByLanguage(language: string): Promise<LanguageExercisesList | null> {

        const languageExercisesList = await prisma.languageExercisesLists.findFirst({
            where: { language }
        });

        if (!languageExercisesList) return null;

        return new LanguageExercisesList(languageExercisesList, new UniqueEntityID(languageExercisesList.id));
    }

    async addExercisesList(exercisesListsId: string, languageExercisesListLanguage: string): Promise<ExercisesList[]> {

        const languageExercisesList = await prisma.languageExercisesLists.update({
            where: { language: languageExercisesListLanguage },
            data: {
                exercisesLists: {
                    connect: {
                        id: exercisesListsId
                    }
                }
            }
        });

        const exercisesLists = await this.fetchExercisesLists(languageExercisesList.id);

        return exercisesLists;
    }

    async removeExercisesList(exercisesListsId: string, languageExercisesListLanguage: string): Promise<ExercisesList[]> {

        const languageExercisesList = await prisma.languageExercisesLists.update({
            where: { language: languageExercisesListLanguage },
            data: {
                exercisesLists: {
                    disconnect: {
                        id: exercisesListsId
                    }
                }
            }
        });

        const exercisesLists = await this.fetchExercisesLists(languageExercisesList.id);

        return exercisesLists;
    }
}

