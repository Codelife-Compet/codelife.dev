import { UpdateVideoProps, Video } from "../../@entities/video"

export interface VideosRepository {
    create(data: Video): Promise<Video>
    findById(id: string): Promise<Video | null>
    findByYoutubeId(youtubeId: string, slideId: string): Promise<Video | null>
    delete(id: string): Promise<Video | null>    
    update(id: string, data: UpdateVideoProps): Promise<Video | null>
}