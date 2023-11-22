import { User } from "@/domain/users/entities/user"
import { Team, TeamProps } from "../../@entities/team"

export interface TeamsRepository { // define quais metodos vao existir na comunicação entre repositorio e casos de uso
    create(data: TeamProps): Promise<Team>
    fetchUsers(teamId: string): Promise<User[]>
    findById(id: string): Promise<Team | null>
    findByName(name: string): Promise<Team | null>
    addUser(userId: string, teamName: string): Promise<User[]>
    removeUser(userId: string, teamName: string): Promise<User[]>
}