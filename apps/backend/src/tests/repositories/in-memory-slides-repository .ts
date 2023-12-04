import { SlideProps, Slide } from "@/domain/trilhas/@entities/slide";
import { Level } from "@/domain/trilhas/@entities/level";
import { SlidesRepository } from "@/domain/trilhas/slides/repositories/slidesInterfaceRepository";
import { InMemoryLevelsRepository } from "./in-memory-level-repository ";

export class InMemorySlidesRepository implements SlidesRepository {

    public items: Slide[] = []

    constructor(private levelsRepository: InMemoryLevelsRepository) {}
    
    async getVideoLink(slideId: string): Promise<string | null> {
        
        const slide = await this.findById(slideId);
        if(!slide) return null;

        const video = slide.video
        if(!video) return null;

        return `https://${video.distributionName}/${video.videoKey}`
    }
    
    async create(data: SlideProps): Promise<Slide> {

        const slide = new Slide(data);
        this.items.push(slide);

        const level = await this.levelsRepository.findById(slide.levelId)
        this.levelsRepository.items[this.levelsRepository.items.indexOf(level as Level)].slides?.push(slide) 

        return slide;
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