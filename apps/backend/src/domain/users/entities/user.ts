import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Account } from "./acccount";
import { Optional } from "@/core/types/optional";

export type UserProps = {
    role: "USER" | "ADMIN",
    score: number,
    name?: string | null,
    email?: string | null,
    emailVerified?: Date | null,
    image?: string | null,
    password?: string | null,
    teamId?: string | null,
    accounts?: Account[],
};

export class User extends Entity<UserProps> {

    constructor(props: Optional<UserProps, 'score' | 'role' | 'accounts'>, id?: UniqueEntityID) {
        super({
            ...props,
            score: props.score ?? 0,
            role: props.role ?? "USER",
            accounts: props.accounts ?? [],
        }, id)
    }

    get name() { return this.props.name }
    get role() { return this.props.role }
    get email() { return this.props.email }
    get emailVerified() { return this.props.emailVerified }
    get image() { return this.props.image }
    get accounts() { return this.props.accounts }
    get password() { return this.props.password }
    get teamId() { return this.props.teamId }
    get score() { return this.props.score }

    toJSON() {
        return {
            ...super.toJSON(),
            name: this.name,
            role: this.role,
            email: this.email,
            emailVerified: this.emailVerified,
            image: this.image,
            accounts: this.accounts,
            password: this.password,
            teamId: this.teamId,
            score: this.score,
        };
    }
}
