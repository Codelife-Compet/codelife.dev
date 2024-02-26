import { Optional } from "@/core/types/optional"
import { Exercise, ExerciseProps } from "../../@entities/exercise"
import { ExerciseStatus } from "../../@entities/exerciseStatus"

export interface ExercisesRepository { 
    create(data: ExerciseProps): Promise<Exercise>
    delete(id: string): Promise<Exercise>
    update(id: string, data: Optional<ExerciseProps, "difficulty" | "exerciseStatus" | "exercisesListId" | "link" | "name" >): Promise<Exercise>
    findById(id: string): Promise<Exercise | null>
    findByName(language: string): Promise<Exercise | null>
    fetchExerciseStatus(exerciseId: string): Promise<ExerciseStatus[]>
    addExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]>
    removeExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]>
}