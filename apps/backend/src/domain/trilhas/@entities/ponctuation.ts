import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UpdatePonctuationProps = {
    userName?: string
    score?: number
};

export type PonctuationProps = {
    userName: string
    score: number
    levelId: string
};

export class Ponctuation extends Entity<PonctuationProps> {

    constructor(props: PonctuationProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userName() { return this.props.userName }
    get score() { return this.props.score }
}
