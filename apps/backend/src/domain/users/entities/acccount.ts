import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export type AccountProps = {
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

export class Account extends Entity<AccountProps> {

    constructor(props: AccountProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get userId() { return this.props.userId }
    get type() { return this.props.type }
    get provider() { return this.props.provider }
    get providerAccountId() { return this.props.providerAccountId }
    get refresh_token() { return this.props.refresh_token }
    get access_token() { return this.props.access_token }
    get expires_at() { return this.props.expires_at }
    get token_type() { return this.props.token_type }
    get scope() { return this.props.scope }
    get id_token() { return this.props.id_token }
    get session_state() { return this.props.session_state }
}
