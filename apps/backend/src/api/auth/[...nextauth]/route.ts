import  NextAuth  from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider  from "next-auth/providers/google"
import { env } from '../../../core/env'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from "@/core/db/prisma";

export const authConfig = {

    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: env.GITHUB_CLIENT_ID ?? "",
            clientSecret: env.GITHUB_CLIENT_SECRET ?? "",

        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],

};

export const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };