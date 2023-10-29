 import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type VideoProps = {
    videoKey: string
    distributionName: string
    slideId: string
};

export class Video extends Entity<VideoProps> {

    constructor(props: VideoProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get videoKey() { return this.props.videoKey }
    get distributionName() { return this.props.distributionName }
    get slideId() { return this.props.slideId }
}
