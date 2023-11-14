import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Slide } from "./slide";
import { Ponctuation } from "./ponctuation";

export type LevelProps = {
    name: string
    description: string
    theme: string
    ponctuations?: Ponctuation[]
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
    get ponctuations() { return this.props.ponctuations }
    get slides() { return this.props.slides }
    get islandId() { return this.props.islandId }
}
