"use server";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

////////////////////// USERS ////////////////////////////////////////
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

export const deleteUser = async (formData: FormData) => {
  const inputId = formData.get("inputId") as string;
  await prisma.user.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/");
};

////////////////////// PROJECTS ////////////////////////////////////////
export const createProject = async (formData: FormData) => {
  const projectType = formData.get("project type") as string;
  const projectName = formData.get("project name") as string;
  const sf = formData.get("sf") as string;
  if (!projectType.trim()) {
    return;
  }
  if (!projectName.trim()) {
    return;
  }

  await prisma.project.create({
    data: {
      projectType,
      projectName,
      sf,
    },
  });

  revalidatePath("/");
};

export const deleteProject = async (formData: FormData) => {
  const inputId = formData.get("inputId") as string;
  await prisma.project.delete({
    where: {
      id: inputId,
    },
  });
  revalidatePath("/");
};
