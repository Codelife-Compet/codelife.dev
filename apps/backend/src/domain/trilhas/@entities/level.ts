import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Slide } from "./slide";

export type LevelProps = {
    name: string
    description: string
    theme: string
    slides?: Slide[]
    islandId: string
};

export class Level extends Entity<LevelProps> {

    constructor(props: LevelProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get description() { return this.props.description }
    get theme() { return this.props.theme }
    get slides() { return this.props.slides }
    get islandId() { return this.props.islandId }
}
