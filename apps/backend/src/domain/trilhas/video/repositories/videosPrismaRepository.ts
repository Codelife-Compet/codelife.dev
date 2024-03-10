import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Video } from "../../@entities/video";
import { VideosRepository } from "./videosInterfaceRepository";
import path from "path"
import { glob } from "glob";

export class VideosPrismaRepository implements VideosRepository {

    async create(data: Video): Promise<Video> {

        const video = await prisma.video.create({ data: data.data });

        return new Video(video, new UniqueEntityID(video.id))
    }

    async findById(id: string): Promise<Video | null> {
        const video = await prisma.video.findUnique({
            where: { id }
        });

        return (video ? new Video(video, new UniqueEntityID(video.id)) : null);
    }

    async findVideoByVideoKey_SlideId(youtubeId: string, slideId: string): Promise<Video | null> {
        const video = await prisma.video.findUnique({
            where: {
                slideId,
                youtubeId
            }
        });

        return (video ? new Video(video, new UniqueEntityID(video.id)) : null);
    }

    private partial_to_full_path({ dirname, partialPath }: {
        dirname: string, partialPath: string
    }): string {
        return path.join(dirname, partialPath);
    }

    private async folderFiles(directory: string): Promise<{ dirFiles: string[], directory: string }> {

        const pattern = "**/*{.txt,.mp4}";
        const dirFiles = await glob(pattern, { cwd: directory });

        return { dirFiles, directory }
    }

    async delete(filePath: string): Promise<boolean> {
       
        return true;
    }
}

