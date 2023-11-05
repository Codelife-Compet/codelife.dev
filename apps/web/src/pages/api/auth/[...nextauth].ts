import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import { PrismaClient } from '@prisma/client'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: 'aa7cf54cce4fd4eb1d32',
      clientSecret: 'a4322abdafdd67984d34be74b1e371d044c8128f',
    }),
    GoogleProvider({
      clientId:
        '806867398976-a1qumgff5fmafup221k9r3cs3in7otgb.apps.googleusercontent.com',
      clientSecret: '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',
    }), 
  ],
  callbacks: {
    async signIn(params) {
      const { user, account } = params

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ user, account }),
        headers: { 'Content-Type': 'application/json' },
      }

      const createMemberUrl = `http://localhost:3333/user/create`

      await fetch(createMemberUrl, requestOptions)
      console.dir({
        user,
        account,
      })

      return true
    },
  },
})
