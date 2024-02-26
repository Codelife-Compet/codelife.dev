import { ExercisesList } from "../../@entities/exercisesLists"
import { LanguageExercisesList, LanguageExercisesListProps, UpdateLanguageExercisesListProps } from "../../@entities/languageExercisesLists"

export interface LanguageExercisesListsRepository { 
    create(data: LanguageExercisesListProps): Promise<LanguageExercisesList>
    update(id: string, data: UpdateLanguageExercisesListProps): Promise<LanguageExercisesList>
    delete(id: string): Promise<LanguageExercisesList>
    findById(id: string): Promise<LanguageExercisesList | null>
    findByLanguage(language: string): Promise<LanguageExercisesList | null>
    fetchExercisesLists(id: string): Promise<ExercisesList[]>
    addExercisesList(exercisesListsId: string, languageExercisesListLanguage: string): Promise<ExercisesList[]>
    removeExercisesList(exercisesListsId: string, languageExercisesListLanguage: string): Promise<ExercisesList[]>
}