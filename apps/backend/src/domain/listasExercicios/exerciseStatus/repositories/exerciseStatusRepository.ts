import { ExerciseStatus, ExerciseStatusProps, UpdateExerciseStatusProps } from "../../@entities/exerciseStatus"

export interface ExerciseStatusRepository { 
    create(data: ExerciseStatusProps): Promise<ExerciseStatus>
    delete(id: string): Promise<ExerciseStatus>
    findById(id: string): Promise<ExerciseStatus | null>
    findByUserName(language: string): Promise<ExerciseStatus | null>
    update(id: string, data: UpdateExerciseStatusProps): Promise<ExerciseStatus>
}