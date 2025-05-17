import { Blog } from "@prisma/client";
import prisma from "../../shared/prisma";

const addBlogDataIndoDB = async (email: string, payload: Blog) => {
  const userInfo = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });
  const result = await prisma.blog.create({
    data: {
      ...payload,
      authorId: userInfo?.id,
    },
  });
  return result;
};

const getAllBlogDataFromDB = async () => {
  const result = await prisma.blog.findMany();
  return result;
};

const deletedBlogIntoDB = async (id: string) => {
  await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};
const updateBlogIntoDB = async (id: string, blogInfo: Partial<Blog>) => {
  await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: blogInfo,
  });
  return result;
};
export const blogServices = {
  addBlogDataIndoDB,
  getAllBlogDataFromDB,
  deletedBlogIntoDB,
  updateBlogIntoDB,
};
