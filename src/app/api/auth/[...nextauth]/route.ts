// import NextAuth, { User, NextAuthOptions, Account } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { supabase } from "@/lib/supabase";
// import { Session } from "next-auth";
// import { JWT } from "next-auth/jwt";
// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         const { data: user } = await supabase
//           .from("users")
//           .select("*")
//           .eq("email", credentials.email)
//           .single();

//         if (!user || !user.password) return null;

//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isValid) return null;

//         return { id: user.id, email: user.email };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account }: { user: User; account: Account }) {
//       if (account?.provider === "google") {
//         const { data: existingUser } = await supabase
//           .from("users")
//           .select("*")
//           .eq("email", user.email)
//           .single();

//         if (!existingUser) {
//           await supabase.from("users").insert({
//             id: user.id,
//             email: user.email,
//             google_id: account.providerAccountId,
//           });
//         }
//       }
//       return true;
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       if (session.user) {
//         session.user.id = token.sub;
//       }
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
