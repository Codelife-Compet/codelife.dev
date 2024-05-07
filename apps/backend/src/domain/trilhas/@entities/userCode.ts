import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UpdateUserCodeProps = {
    userName?: string
    code?: string
}

export type UserCodeProps = {
    userName: string
    code?: string | null // pode estar vazio pois usuario pode não ter digitado nada ainda
    slideId: string
};

export class UserCode extends Entity<UserCodeProps> {

    constructor(props: UserCodeProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userName() { return this.props.userName }
    get code() { return this.props.code }
    get slideId() { return this.props.slideId }
}
