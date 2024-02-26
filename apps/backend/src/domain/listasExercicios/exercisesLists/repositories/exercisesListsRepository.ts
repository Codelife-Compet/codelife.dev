import { Exercise } from "../../@entities/exercise"
import { ExercisesList, ExercisesListProps, UpdateExercisesListProps } from "../../@entities/exercisesLists"

export interface ExercisesListsRepository { 
    create(data: ExercisesListProps): Promise<ExercisesList>
    delete(id: string): Promise<ExercisesList>
    update(id: string, data: UpdateExercisesListProps): Promise<ExercisesList>
    findById(id: string): Promise<ExercisesList | null>
    findByTopic(topic: string): Promise<ExercisesList | null>
    addExercise(exerciseId: string, exercisesListTopic: string): Promise<Exercise[]> 
    removeExercise(exerciseId: string, exercisesListTopic: string): Promise<Exercise[]> 
    fetchExercises(exerciseId: string): Promise<Exercise[]>
}