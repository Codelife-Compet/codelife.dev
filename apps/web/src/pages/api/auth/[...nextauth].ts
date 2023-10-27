import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const GITHUB_ID = '3c8322fcff2fcf214995'
const GITHUB_SECRET = 'e81659d521d2ed9baef7a6949debc6d0117ce9e3'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_ID as string,
      clientSecret: GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
