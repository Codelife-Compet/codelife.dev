import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Level } from "./level";

export type UpdateIslandProps = {
    name?: string
    description?: string
    theme?: string
    trailId?: string
};

export type IslandProps = {
    name: string
    description: string
    theme: string
    trailId: string
    levels?: Level[]
};

export class Island extends Entity<IslandProps> {

    constructor(props: IslandProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get description() { return this.props.description }
    get theme() { return this.props.theme }
    get trailId() { return this.props.trailId }    
    get levels() { return this.props.levels }
}
