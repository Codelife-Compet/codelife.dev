import { User } from "@/domain/users/entities/user"
import { Team, TeamProps, UpdateTeamProps } from "../../@entities/team"

export interface TeamsRepository { 
    create(data: TeamProps): Promise<Team>
    fetchUsers(teamId: string): Promise<User[]>
    findById(id: string): Promise<Team | null>
    findByName(name: string): Promise<Team | null>
    addUser(userId: string, teamName: string): Promise<User[]>
    removeUser(userId: string, teamName: string): Promise<User[]>
    delete(id: string): Promise<Team | null>
    update(id: string, data: UpdateTeamProps): Promise<Team | null>
    list(): Promise<Team[]>
    listMembersByTeam(id: string): Promise<User[]>
}