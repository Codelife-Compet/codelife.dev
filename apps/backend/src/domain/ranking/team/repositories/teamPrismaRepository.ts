import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { TeamProps, Team } from "../../@entities/team";
import { TeamsRepository } from "./teamInterfaceRepository";
import { User, UserProps } from "@/domain/users/entities/user";

export class TeamsPrismaRepository implements TeamsRepository {

    async create(data: TeamProps): Promise<Team> {

        const { users, ...restData } = data;

        const team = await prisma.team.create({ data: restData });

        return new Team(team, new UniqueEntityID(team.id))
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

    async addUser(user: UserProps, teamName: string): Promise<Team> {

        const team = await prisma.team.findUnique({
            where: { name: teamName },
            include: { users: true },
        });

        if (!team) {
            throw new Error(`Team with name ${teamName} not found`);
        }

        const updatedTeam = await prisma.team.update({
            where: { id: team.id },
            data: {
                users: {
                    connect: {
                        id: user.id.toString(),
                    },
                },
            },
            include: { users: true },
        });

        const { id, users, ...newTeam } = updatedTeam

        const newUsers = users.map(user => {

            const {id, ...userData} = user

            new User(userData, new UniqueEntityID(user.id))
        }
        )

        return new Team(newTeam, new UniqueEntityID(id));
    }
}

