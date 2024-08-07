import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { TeamProps, Team, UpdateTeamProps } from "../../@entities/team";
import { TeamsRepository } from "./teamInterfaceRepository";
import { User, UserProps } from "@/domain/users/entities/user";

export class TeamsPrismaRepository implements TeamsRepository {

    async create(data: TeamProps): Promise<Team> {

        const { users, ...restData } = data;

        const team = await prisma.team.create({ data: restData });

        return new Team(team, new UniqueEntityID(team.id))
    }

    async fetchUsers(teamId: string): Promise<User[]> {

        const users = await prisma.user.findMany({
            where: {
                teamId
            }
        });

        return users.map(user => new User({ ...user, accounts: [] }, new UniqueEntityID(user.id)));
    }

    async findById(id: string): Promise<Team | null> {
        const team = await prisma.team.findUnique({
            where: { id }
        });

        return (team ? new Team(team, new UniqueEntityID(team.id)) : null);
    }

    async findByName(name: string): Promise<Team | null> {
        const team = await prisma.team.findFirst({
            where: { name }
        });

        if (!team) return null;

        return (team ? new Team(team, new UniqueEntityID(team.id)) : null);
    }

    async addUser(userId: string, teamName: string): Promise<User[]> {

        const team = await prisma.team.update({
            where: { name: teamName },
            data: {
                users: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        const users = await prisma.user.findMany({
            where: {
                teamId: team.id
            }
        });

        const newUSers = users.map(user => new User({ ...user, accounts: [] }, new UniqueEntityID(user.id)));

        return newUSers;
    }

    async removeUser(userId: string, teamName: string): Promise<User[]> {

        const team = await prisma.team.update({
            where: { name: teamName },
            data: {
                users: {
                    disconnect: {
                        id: userId
                    }
                }
            }
        });

        const users = await prisma.user.findMany({
            where: {
                teamId: team.id
            }
        });

        const newUSers = users.map(user => new User({ ...user, accounts: [] }, new UniqueEntityID(user.id)));

        return newUSers;
    }

    async update(id: string, data: UpdateTeamProps): Promise<Team | null> {
            
        const team = await prisma.team.update({
            where: { id },
            data
        });

        return (team ? new Team(team, new UniqueEntityID(team.id)) : null);
    }

    async delete(id: string): Promise<Team | null> {
        
        const team = await prisma.team.delete({
            where: { id }
        });

        return (team ? new Team(team, new UniqueEntityID(team.id)) : null);
    }

    async list(): Promise<Team[]> {
        const teams = await prisma.team.findMany();

        return teams.map(team => new Team(team, new UniqueEntityID(team.id)));
    }

    async listMembersByTeam(id: string): Promise<User[]> {
        const users = await prisma.user.findMany({
            where: {
                teamId: id
            }
        });

        return users.map(user => new User({ ...user, accounts: [] }, new UniqueEntityID(user.id)));
    }
}

