import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ExercisesList } from "./exercisesLists";
import { Optional } from "@/core/types/optional";

export type LanguageExercisesListProps = {
    language: string
    exercisesLists: ExercisesList[]
};

export type UpdateLanguageExercisesListProps = {
    language?: string
};

export class LanguageExercisesList extends Entity<LanguageExercisesListProps> {

    constructor(props:  Optional<LanguageExercisesListProps, 'exercisesLists'>, id?: UniqueEntityID) {
        props.exercisesLists = props.exercisesLists ?? [];
        super(props as LanguageExercisesListProps, id);
    }

    get language() { return this.props.language }
    get exercisesList() { return this.props.exercisesLists }
}
