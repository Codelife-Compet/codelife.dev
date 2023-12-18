import { Video, VideoProps } from "../../@entities/video"

export interface VideosRepository {
    create(data: Video): Promise<Video>
    findById(id: string): Promise<Video | null>
    findVideoByVideoKey_SlideId(youtubeId: string, slideId: string): Promise<Video | null>
    delete(directory: string): Promise<boolean>    
}