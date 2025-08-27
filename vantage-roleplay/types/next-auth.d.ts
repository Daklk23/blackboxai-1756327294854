import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      roles?: string[]
      discordId?: string
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    roles?: string[]
    discordId?: string
  }

  interface Profile {
    id: string
    username: string
    discriminator: string
    email?: string
    verified?: boolean
    avatar?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles?: string[]
    discordId?: string
  }
}
