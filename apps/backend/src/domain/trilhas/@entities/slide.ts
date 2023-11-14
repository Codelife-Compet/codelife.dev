import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { UserCode } from "./userCode";
import { Video } from "./video";

export type SlideProps = {
    name: string
    description: string
    theme: string
    baseCode: string // linhas de código base para aquela atividade
    userCodes?: UserCode[] // código previamente digitado pelo usuário
    video?: Video
    levelId: string
};

export class Slide extends Entity<SlideProps> {

    constructor(props: SlideProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get description() { return this.props.description }
    get theme() { return this.props.theme }
    get baseCode() { return this.props.baseCode }
    get userCodes() { return this.props.userCodes }
    get viddeo() { return this.props.video }
    get levelId() { return this.props.levelId }
    // get video() { return this.props.video }
}
