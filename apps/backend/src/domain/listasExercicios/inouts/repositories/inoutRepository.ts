import { Inout, InoutProps, UpdateInoutProps } from "../../@entities/inout"

export interface InoutRepository { 
    create(data: InoutProps): Promise<Inout>
    delete(id: string): Promise<Inout>
    findById(id: string): Promise<Inout | null>
    findByExerciseId(exerciseId: string): Promise<Inout | null>
    update(id: string, data: UpdateInoutProps): Promise<Inout>
}