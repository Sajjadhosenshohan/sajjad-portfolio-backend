
import { Resume } from "@prisma/client";
import prisma from "../../shared/prisma";

const addResumeIntoDB = async (payload: Resume) => {
  const result = await prisma.resume.create({
    data: payload,
  });
  return result;
};

const getAllResumeDataFromDB = async () => {
  const result = await prisma.resume.findMany();
  return result;
};

const deleteResumeFromDB = async (id: string) => {
  console.log(id)
  await prisma.resume.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.resume.delete({
    where: {
      id,
    }
  });
  return result;
};
const updateResumeFromDB = async (id: string, payload: Partial<Resume>) => {
  await prisma.resume.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const result = await prisma.resume.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const ResumeServices = {
  addResumeIntoDB,
  getAllResumeDataFromDB,
  deleteResumeFromDB,
  updateResumeFromDB
};
