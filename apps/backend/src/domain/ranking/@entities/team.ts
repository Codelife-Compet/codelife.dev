import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { User } from "@/domain/users/entities/user";

export type TeamProps = {
    name: string
    institutionName?: string | null
    institutinPicture?: string | null
    users?: User[]
};

export type UpdateTeamProps = {
    name?: string
    institutionName?: string | null
    institutinPicture?: string | null
};

export class Team extends Entity<TeamProps> {

    constructor(props: TeamProps, id?: UniqueEntityID) {
        super(props, id)
    }

    get name() { return this.props.name }
    get institutionName() { return this.props.institutionName }
    get institutinPicture() { return this.props.institutinPicture }
    get users() { return this.props.users }
}
