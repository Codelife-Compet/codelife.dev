import { Video, VideoProps } from "../../@entities/video"

export interface VideosRepository {
    create(data: VideoProps): Promise<Video>
    findById(id: string): Promise<Video | null>
    findVideoByVideoKey_SlideId(videoKey: string, slideId: string): Promise<Video | null>
}