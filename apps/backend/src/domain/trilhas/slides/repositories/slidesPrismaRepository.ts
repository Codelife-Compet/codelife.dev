import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { SlideProps, Slide, UpdateSlideProps } from "../../@entities/slide";
import { SlidesRepository } from "./slidesInterfaceRepository";

export class SlidesPrismaRepository implements SlidesRepository {

    async list(): Promise<Slide[]> {
        const slides = await prisma.slide.findMany();

        return slides.map(slide => new Slide(slide, new UniqueEntityID(slide.id)));
    }

    async listByLevelId(levelId: string): Promise<Slide[]> {
        const slides = await prisma.slide.findMany({
            where: { levelId }
        });

        return slides.map(slide => new Slide(slide, new UniqueEntityID(slide.id)));
    }

    async create(data: SlideProps): Promise<Slide> {

        const { userCodes, video, ...restData } = data;

        const slide = await prisma.slide.create({ data: restData });

        return new Slide(slide, new UniqueEntityID(slide.id))
    }

    async findById(id: string): Promise<Slide | null> {
        const slide = await prisma.slide.findUnique({
            where: { id }
        });

        return (slide ? new Slide(slide, new UniqueEntityID(slide.id)) : null);
    }

    async findSlideBySlideName_LevelId(slideName: string, levelId: string): Promise<Slide | null> {
        const slide = await prisma.slide.findUnique({
            where: {
                levelId,
                name: slideName
            }
        });

        return (slide ? new Slide(slide, new UniqueEntityID(slide.id)) : null);
    }

    async update(id: string, data: UpdateSlideProps): Promise<Slide | null> {
        const slide = await prisma.slide.update({
            where: { id },
            data
        });

        return (slide ? new Slide(slide, new UniqueEntityID(slide.id)) : null);
    }

    async delete(id: string): Promise<Slide | null> {
        const slide = await prisma.slide.delete({
            where: { id }
        });

        return (slide ? new Slide(slide, new UniqueEntityID(slide.id)) : null);
    }
}

