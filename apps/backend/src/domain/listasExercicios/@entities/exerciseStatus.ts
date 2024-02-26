import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type ExerciseStatusProps = {
    userName: string
    status: string
    exerciseId: string
};

export type UpdateExerciseStatusProps = {
    userName?: string
    status?: string
    exerciseId?: string
};

export class ExerciseStatus extends Entity<ExerciseStatusProps> {

    constructor(props: ExerciseStatusProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userName() { return this.props.userName }
    get status() { return this.props.status }
    get exerciseId() { return this.props.exerciseId }
}
