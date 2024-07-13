import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { TrailProgress } from "./trailProgress";

export type UpdateUserProgressProps = {
    userId?: string
};

export type UserProgressProps = {
    userId: string
    trailProgresses: TrailProgress[]
};

export class UserProgress extends Entity<UserProgressProps> {

    constructor(props: UserProgressProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userId() { return this.props.userId }
    get trailProgresses() { return this.props.trailProgresses }

}
