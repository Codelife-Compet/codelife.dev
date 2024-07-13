import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UpdateTrailProgressProps = {
    userProgressId?: string
    islandId?: string
    levelId?: string
    slideId?: string
};

export type TrailProgressProps = {
    userProgressId: string
    trailId: string // progresso dessa trilha
    islandId: string // qual ilha ele se encontra
    levelId: string // qual level ele se encontra
    slideId: string // qual slide ele se encontra
};

export class TrailProgress extends Entity<TrailProgressProps> {

    constructor(props: TrailProgressProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userProgressId() { return this.props.userProgressId }
    get islandId() { return this.props.islandId }
    get levelId() { return this.props.levelId }
    get slideId() { return this.props.slideId }

}
