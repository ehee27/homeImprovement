"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const createUser = async (formData: FormData) => {
  const name = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  if (!name.trim()) {
    return;
  }
  await prisma.user.create({
    data: {
      fullName: name,
      email,
    },
  });
  revalidatePath("/");
};
