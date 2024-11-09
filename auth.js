import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import authConfig from "./auth.config";
import client from "./lib/authDB";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [],
  session: { strategy: "jwt" },
  ...authConfig,
});
