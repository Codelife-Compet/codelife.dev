import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UserProps = {
    name: string,
    email: string,
    role: string,
    profile_picture?: string,
    linkedin_url?: string,
    github_url?: string,
    created_at?: Date
    updated_at?: Date
};

export class User extends Entity<UserProps> {

    constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get email() { return this.props.email }
    get profile_picture() { return this.props.profile_picture }
    get linkedin_url() { return this.props.linkedin_url }
    get github_url() { return this.props.github_url }
}
