 import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type VideoProps = {
    youtubeId: string
    slideId: string
};

export class Video extends Entity<VideoProps> {

    constructor(props: VideoProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get slideId() { return this.props.slideId }
}
