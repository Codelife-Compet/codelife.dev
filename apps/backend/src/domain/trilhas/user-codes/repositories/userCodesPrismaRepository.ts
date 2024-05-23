import { prisma } from "@/core/db/prisma";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { UserCodeProps, UserCode, UpdateUserCodeProps } from "../../@entities/userCode";
import { UserCodesRepository } from "./userCodesInterfaceRepository";

export class UserCodesPrismaRepository implements UserCodesRepository {

    async create(data: UserCodeProps): Promise<UserCode> {

        const userCode = await prisma.userCode.create({ data });

        return new UserCode(userCode, new UniqueEntityID(userCode.id))
    }

    async findById(id: string): Promise<UserCode | null> {
        const userCode = await prisma.userCode.findUnique({
            where: { id }
        });

        return (userCode ? new UserCode(userCode, new UniqueEntityID(userCode.id)) : null);
    }

    async findUserCodeBySlideId(slideId: string): Promise<UserCode | null> {
        const slide = await prisma.userCode.findUnique({
            where: { slideId }
        });

        return (slide ? new UserCode(slide, new UniqueEntityID(slide.id)) : null);
    }

    async findByUserName(userName: string, slideId: string): Promise<UserCode | null> {
        const userCode = await prisma.userCode.findFirst({
            where: {
                userName,
                slideId
            }
        });

        return (userCode ? new UserCode(userCode, new UniqueEntityID(userCode.id)) : null);

    }

    async list(): Promise<UserCode[]> {
        const userCodes = await prisma.userCode.findMany();

        return userCodes.map(userCode => new UserCode(userCode, new UniqueEntityID(userCode.id)));
    }

    async listBySlideId(slideId: string): Promise<UserCode[]> {
        const userCodes = await prisma.userCode.findMany({
            where: { slideId }
        });

        return userCodes.map(userCode => new UserCode(userCode, new UniqueEntityID(userCode.id)));
    }

    async update(id: string, data: UpdateUserCodeProps): Promise<UserCode | null> {
        const userCode = await prisma.userCode.update({
            where: { id },
            data
        });

        return (userCode ? new UserCode(userCode, new UniqueEntityID(userCode.id)) : null);
    }

    async delete(id: string): Promise<UserCode | null> {
        const userCode = await prisma.userCode.delete({
            where: { id }
        });

        return (userCode ? new UserCode(userCode, new UniqueEntityID(userCode.id)) : null);
    }

}

