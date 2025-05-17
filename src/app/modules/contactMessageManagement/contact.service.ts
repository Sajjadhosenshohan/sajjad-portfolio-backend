import { Message } from '@prisma/client';
import prisma from '../../shared/prisma';

const addMessageIndoDB = async (payload: Message) => {
   const result = await prisma.message.create({
    data: payload,
  });
  return result;
};

const getAllMessageDataFromDB = async () => {
  const result = await prisma.message.findMany();
  return result;
};

export const ContactServices = {
  addMessageIndoDB,
  getAllMessageDataFromDB
};
