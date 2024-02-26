import { User } from "@/domain/users/entities/user"
import { Team, TeamProps } from "../../@entities/team"

export interface TeamsRepository { 
    create(data: TeamProps): Promise<Team>
    fetchUsers(teamId: string): Promise<User[]>
    findById(id: string): Promise<Team | null>
    findByName(name: string): Promise<Team | null>
    addUser(userId: string, teamName: string): Promise<User[]>
    removeUser(userId: string, teamName: string): Promise<User[]>
}