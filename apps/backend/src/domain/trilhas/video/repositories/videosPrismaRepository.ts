import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { VideoProps, Video } from "../../@entities/video";
import { VideosRepository } from "./videosInterfaceRepository";

export class VideosPrismaRepository implements VideosRepository {

    async create(data: VideoProps): Promise<Video> {

        const video = await prisma.video.create({ data });

        return new Video(video, new UniqueEntityID(video.id))
    }

    async findById(id: string): Promise<Video | null> {
        const video = await prisma.video.findUnique({
            where: { id }
        });

        return (video ? new Video(video, new UniqueEntityID(video.id)) : null);
    }

    async findVideoByVideoKey_SlideId(videoKey: string, slideId: string): Promise<Video | null> {
        const video = await prisma.video.findUnique({
            where: {
                slideId,
                videoKey
            }
        });

        return (video ? new Video(video, new UniqueEntityID(video.id)) : null);
    }
}

