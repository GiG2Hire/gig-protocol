//Github integration
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions = {
    providers: [
      GithubProvider({
        clientId: '',
        clientSecret: '',
      }),
    ],
}

NextAuth(authOptions)
