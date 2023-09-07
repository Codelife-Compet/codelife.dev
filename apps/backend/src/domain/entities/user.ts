import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type UserProps = {
    name: string,
    profile_picture?: string | null,
    email: string,
    password?: string | null,
    role: string,
    google_token?: string | null,
    facebook_token?: string | null,
    github_token?: string | null,
    created_at?: Date
    updated_at?: Date | null
};

export class User extends Entity<UserProps> {

    constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get profile_picture() { return this.props.profile_picture }
    get email() { return this.props.email }
    get password() { return this.props.password }
    get role() { return this.props.role }
    get google_token() { return this.props.google_token }
    get facebook_token() { return this.props.facebook_token }
    get github_token() { return this.props.github_token }
    get created_at() { return this.props.created_at }
    get updated_at() { return this.props.updated_at }
}
