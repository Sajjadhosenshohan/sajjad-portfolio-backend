
import { Project } from "@prisma/client";
import prisma from "../../shared/prisma";

const addProjectDataIndoDB = async (payload: Project) => {
  const result = await prisma.project.create({
    data: payload
  })
  return result;
};

const getAllProjectDataFromDB = async () => {
  const result = await prisma.project.findMany();
  return result;
};

const deletedProjectIntoDB = async (id: string) => {
  await prisma.project.findUniqueOrThrow({
    where: {
      id
    }
  });

const result = await prisma.project.delete({
  where: {
    id
  }
})

  return result;
};
const updateProjectIntoDB = async (id: string, projectInfo: Partial<Project>) => {
  await prisma.project.findUniqueOrThrow({
    where: {
      id
    }
  });
  const result = await prisma.project.update({
    where: {
      id
    },
    data:projectInfo
  });

  return result;
};
export const projectServices = {
    addProjectDataIndoDB,
    getAllProjectDataFromDB,
    deletedProjectIntoDB,
    updateProjectIntoDB
};
