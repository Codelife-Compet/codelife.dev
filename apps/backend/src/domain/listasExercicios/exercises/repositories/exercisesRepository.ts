import { Optional } from "@/core/types/optional"
import { Exercise, ExerciseProps } from "../../@entities/exercise"
import { ExerciseStatus } from "../../@entities/exerciseStatus"
import { Inout } from "../../@entities/inout"

export interface ExercisesRepository { 
    create(data: ExerciseProps): Promise<Exercise>
    delete(id: string): Promise<Exercise>
    update(id: string, data: Optional<ExerciseProps, "difficulty" | "exerciseStatus" | "exercisesListId" | "link" | "name" | "description" | "inouts" >): Promise<Exercise>
    findById(id: string): Promise<Exercise | null>
    findByName(language: string): Promise<Exercise | null>
    
    fetchExerciseStatus(exerciseId: string): Promise<ExerciseStatus[]>
    addExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]>
    removeExerciseStatus(exerciseStatusId: string, exerciseName: string): Promise<ExerciseStatus[]>

    fetchInouts(exerciseId: string): Promise<Inout[]>
    addInout(inoutId: string, exerciseName: string): Promise<Inout[]>
    removeInout(inoutId: string, exerciseName: string): Promise<Inout[]>
}