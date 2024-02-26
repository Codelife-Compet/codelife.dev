import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ExerciseStatus } from "./exerciseStatus";

export type ExerciseProps = {
    link: string
    name: string
    difficulty: string
    exerciseStatus: ExerciseStatus[]
    exercisesListId: string
};

export type UpdateExerciseProps = {
    link?: string
    name?: string
    difficulty?: string
    exercisesListId?: string
};

export class Exercise extends Entity<ExerciseProps> {

    constructor(props: ExerciseProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get link() { return this.props.link }
    get name() { return this.props.name }
    get difficulty() { return this.props.difficulty }
    get exerciseStatus() { return this.props.exerciseStatus }
    get exercisesListId() { return this.props.exercisesListId }
}
