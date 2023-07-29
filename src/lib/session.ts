import jsonwebtoken from 'jsonwebtoken'
import { NextAuthOptions, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'
import { getServerSession } from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {},
    decode: async ({ secret, token }) => {},
  },
  theme: {
    colorScheme: 'dark',
    logo: './logo.png',
  },
  callbacks: {
    async session({ session }) {},
    async signIn({ user }) {},
  },
}
