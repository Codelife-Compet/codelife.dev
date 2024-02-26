import { Slide, SlideProps } from "../../@entities/slide"

export interface SlidesRepository { 
    create(data: SlideProps): Promise<Slide>
    findById(id: string): Promise<Slide | null>
    findSlideBySlideName_LevelId(slideName: string, levelId: string): Promise<Slide | null>
    getVideoLink(slideId: string): Promise<string | null>
}