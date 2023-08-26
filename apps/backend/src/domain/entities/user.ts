import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UserProps = {
    name: string,
    email: string,
    role: string,
    profile_picture?: string,
    linkedin_token?: string | null,
    github_token?: string | null,
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
    get linkedin_token() { return this.props.linkedin_token }
    get github_token() { return this.props.github_token }
    get created_at() { return this.props.created_at }
    get role() { return this.props.role }
}
