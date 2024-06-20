import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UpdateVideoProps = {
    youtubeId?: string,
    youtubePlaylistId?: string
};

export type VideoProps = {
    youtubeId: string
    youtubePlaylistId: string | null
    slideId: string
};

export class Video extends Entity<VideoProps> {

    constructor(props: VideoProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get slideId() { return this.props.slideId }
    get youtubeId() { return this.props.youtubeId }
    get youtubePlaylistId() { return this.props.youtubePlaylistId }
}
