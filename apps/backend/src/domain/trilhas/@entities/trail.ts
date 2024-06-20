import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Island } from "./island";

export type UpdateTrailProps = {
    name?: string
    description?: string
    theme?: string
};

export type TrailProps = {
    name: string
    description: string
    theme: string
    islands?: Island[]
};

export class Trail extends Entity<TrailProps> {

    constructor(props: TrailProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get description() { return this.props.description }
    get theme() { return this.props.theme }
    get islands() { return this.props.islands }
}
