import { Video, VideoProps } from "../../@entities/video"

export interface VideosRepository {
    create(data: VideoProps): Promise<Video>
    findById(id: string): Promise<Video | null>
    findVideoByVideoKey_SlideId(youtubeId: string, slideId: string): Promise<Video | null>
    upload(directory: string): Promise<boolean>    
    delete(directory: string): Promise<boolean>    
}