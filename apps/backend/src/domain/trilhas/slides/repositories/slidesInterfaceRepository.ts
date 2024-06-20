import { Slide, SlideProps, UpdateSlideProps } from "../../@entities/slide"

export interface SlidesRepository { 
    create(data: SlideProps): Promise<Slide>
    findById(id: string): Promise<Slide | null>
    findSlideBySlideName_LevelId(slideName: string, levelId: string): Promise<Slide | null>
    list(): Promise<Slide[]>
    listByLevelId(levelId: string): Promise<Slide[]>
    update(id: string, data: UpdateSlideProps): Promise<Slide | null>
    delete(id: string): Promise<Slide | null>
}