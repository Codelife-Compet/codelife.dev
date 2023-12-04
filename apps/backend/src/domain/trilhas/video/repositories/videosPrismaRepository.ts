import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { VideoProps, Video } from "../../@entities/video";
import { VideosRepository } from "./videosInterfaceRepository";
import { S3 } from "aws-sdk";
import { env } from "@/core/env";
import path from "path"
import { glob } from "glob";
import fs from "fs";

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

    async upload(filePath: string): Promise<boolean> {

        const s3 = new S3({
            region: 'sa-east-1',
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY
        })

        const fullPath = this.partial_to_full_path({ dirname: __dirname, partialPath: "../../../../../aws" })

        const { dirFiles, directory } = await this.folderFiles(fullPath)

        const full = dirFiles.map((file) => path.join(directory, file))

        full.forEach((filePath) => {

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.error(err);
                    return false;
                }

                const key = filePath.replace(fullPath, '').replace('/', '')

                console.dir({
                    key,
                    env: env.AWS_BUCKET_NAME,
                });

                s3.putObject(
                    {
                        Bucket: env.AWS_BUCKET_NAME,
                        Key: key,
                        Body: data,
                    },
                    (err, data) => {
                        if (err) {
                            console.error(err);
                            return false;
                        }
                    }
                );

            })
        })

        return true;
    }

    async delete(filePath: string): Promise<boolean> {
        const s3 = new S3({
            region: 'sa-east-1',
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY
        });

        const params = {
            Bucket: env.AWS_BUCKET_NAME,
            Prefix: filePath
        };

        const objects = await s3.listObjectsV2(params).promise();

        if(!objects.Contents) return false

        if (objects.Contents.length === 0) {
            return false;
        }

        const deleteParams: S3.DeleteObjectsRequest = {
            Bucket: env.AWS_BUCKET_NAME,
            Delete: { Objects: [] as Array<{ Key: string }> }
        };

        objects.Contents.forEach(({ Key }) => {
            if (Key) {
                deleteParams.Delete.Objects.push({ Key });
            }
        });

        await s3.deleteObjects(deleteParams).promise();

        return true;
    }
}

