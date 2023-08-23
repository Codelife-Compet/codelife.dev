// todas as operações dentro do banco de dados vão passar pelo repositorio

import { prisma } from "@/core/db/prisma";
import { UsersRepository } from "../interface/users-repository";
import { Prisma } from "@prisma/client";


export class PrismaUsersRepository implements UsersRepository {

    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        });

        return user
    }
}