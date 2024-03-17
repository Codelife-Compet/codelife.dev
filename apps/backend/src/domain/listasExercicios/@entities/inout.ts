import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type InoutProps = {
    input: string
    output: string
    exerciseId: string
};

export type UpdateInoutProps = {
    input?: string
    output?: string
};

export class Inout extends Entity<InoutProps> {

    constructor(props: InoutProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get input() { return this.props.input }
    get output() { return this.props.output }
}
