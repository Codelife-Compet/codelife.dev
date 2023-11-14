import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Team } from "@/domain/ranking/@entities/team";

export type Account = {
    id: string  
    userId: string
    type: string
    provider: string
    providerAccountId: string 
    refresh_token?: string | null 
    access_token?: string | null 
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null 
    session_state?: string | null
}

export type UserProps = {
    id: string,
    role: "USER" | "ADMIN",
    name?: string | null,
    email?: string | null,
    emailVerified?: Date | null,
    image?: string | null,
    password?: string | null,
    team?: Team | null,
    score: number,
    accounts: Account[],
};

export class User extends Entity<UserProps> {

    constructor(props: UserProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get role() { return this.props.role }
    get email() { return this.props.email }
    get emailVerified() { return this.props.emailVerified }
    get image() { return this.props.image }
    get accounts() { return this.props.accounts }
    get password() { return this.props.password }
    get team() { return this.props.team }
    get score() { return this.props.score }
}
