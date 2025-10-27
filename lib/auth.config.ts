import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
  ],
  session: { strategy: 'jwt' as const },
  pages: { signIn: '/login' },
  callbacks: {
    // 1. JWT Callback: Đưa ID từ cơ sở dữ liệu vào Token
    async jwt({ token, user }) {
      // 'user' chỉ tồn tại khi người dùng đăng nhập lần đầu
      if (user) {
        // Với MongoDBAdapter, 'user.id' chính là '_id' của tài liệu user
        token.id = user.id
      }
      return token
    },

    // 2. Session Callback: Đưa ID từ Token vào Session object
    async session({ session, token }) {
      if (token.id && session.user) {
        // Gán ID đã lưu trong token vào session.user
        session.user.id = token.id as string // Gán ID đã lưu trong token vào session.user.id
      }
      return session
    },
  },
}
