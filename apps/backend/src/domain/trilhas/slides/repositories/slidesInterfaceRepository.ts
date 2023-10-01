import { Slide, SlideProps } from "../../@entities/slide"

export interface SlidesRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: SlideProps): Promise<Slide>
    findById(id: string): Promise<Slide | null>
    findSlideBySlideName_LevelId(slideName: string, levelId: string): Promise<Slide | null>
}