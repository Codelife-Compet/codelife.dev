import NextAuth from 'next-auth'

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import googleAPIAuth from '@/../../jsons/googleAPIAuth.json'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: 'aa7cf54cce4fd4eb1d32',
      clientSecret: 'a4322abdafdd67984d34be74b1e371d044c8128f',
    }),
    GoogleProvider({
      clientId: googleAPIAuth.web.client_id,
      clientSecret: googleAPIAuth.web.client_secret,
    }),
    FacebookProvider({
      clientId: '1041677837160433',
      clientSecret: '36fd5ea12c70a2662fe8ee3ca8867266',
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
