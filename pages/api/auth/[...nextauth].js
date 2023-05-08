import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react"
import Axios from "axios";

export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET
  ,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      Axios.post("http://localhost:3001/verificaCadastro", {
      email: user.email,
      nome: user.name,
    })
    return true
    },
  }
})
