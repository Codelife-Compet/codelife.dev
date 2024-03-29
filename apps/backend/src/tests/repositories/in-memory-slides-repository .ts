import { Slide } from "@/domain/trilhas/@entities/slide";
import { SlidesRepository } from "@/domain/trilhas/slides/repositories/slidesInterfaceRepository";
import { InMemoryLevelsRepository } from "./in-memory-level-repository ";

export class InMemorySlidesRepository implements SlidesRepository {

    public items: Slide[] = []

    constructor(private inMemoryLevelsRepository: InMemoryLevelsRepository) {}
    
    async getVideoLink(slideId: string): Promise<string | null> {
        
        const slide = await this.findById(slideId);
        if(!slide) return null;

        const video = slide.video
        if(!video) return null;

        return `https://${video.distributionName}/${video.videoKey}`
    }
    
    async create(data: Slide): Promise<Slide> {

        const slide = new Slide(data);
        this.items.push(slide);

        const level = await this.inMemoryLevelsRepository.findById(data.levelId.toString())
        if (level) {
            level.slides?.push(data)
            this.inMemoryLevelsRepository.save(level)
        }

        return slide;
    }

    async save(slide: Slide): Promise<Slide> {

        const index = this.items.findIndex(item => item.id === slide.id)

        this.items[index] = slide

        return slide
    }

    async findById(id: string): Promise<Slide | null> {
        const slide = this.items.find(slide => slide.id.toString() === id)

        return (slide ? slide : null)
    }

    async findSlideBySlideName_LevelId(slideName: string, levelId: string): Promise<Slide | null> {
        const slide = this.items.find(slide => slide.name === slideName && slide.levelId === levelId)

        return (slide ? slide : null)
    }
}