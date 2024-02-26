import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Exercise } from "./exercise";

export type ExercisesListProps = {
    topic: string
    exercises: Exercise[]
    languageExercisesListId: string
};

export type UpdateExercisesListProps = {
    topic?: string
    languageExercisesListId?: string
};

export class ExercisesList extends Entity<ExercisesListProps> {

    constructor(props: ExercisesListProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get topic() { return this.props.topic }
    get exercises() { return this.props.exercises }
    get languageExercisesListId() { return this.props.languageExercisesListId }
}
