import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "@/app/lib/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log("curr email", session?.user?.email);

    if (!session?.user?.email) return null;

    const currUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!currUser) return null;
    return {
      ...currUser,
      createdAt: currUser.createdAt.toISOString(),
      updatedAt: currUser.updatedAt.toISOString(),
      emailVerified: currUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
