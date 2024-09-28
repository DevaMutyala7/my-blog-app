"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function createPost(data: FormData) {
  const title = data.get("title") as string;
  const body = data.get("description") as string;

  await prisma.pOSTS.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts");
}
