import { Message } from "@prisma/client";
import prisma from "../../shared/prisma";
import nodemailer from "nodemailer";
import config from "../../config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
});

const addMessageIntoDB = async (payload: Message) => {
  const result = await prisma.message.create({
    data: payload,
  });
  // 2. Send email to your Gmail
  const mailOptions = {
    from: `"Your Portfolio Contact" <${config.EMAIL_USER}>`,
    to: "mdshohansajjad@gmail.com",
    subject: `New Message from ${payload.name}`,
    html: `
      <h3>You got a new message!</h3>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);

  return result;
};

const getAllMessageDataFromDB = async () => {
  const result = await prisma.message.findMany();
  return result;
};

const deleteMessageDataFromDB = async (id:string) => {
  await prisma.message.findUniqueOrThrow({
    where: {
      id
    }
  });

  const result = await prisma.message.delete({
    where:{
      id
    }
  })
  return result;
};

const getSingleMessageDataFromDB = async (id:string) => {
  const result = await prisma.message.findUniqueOrThrow({
    where: {
      id
    }
  });

  
  return result;
};

export const ContactServices = {
  addMessageIntoDB,
  getAllMessageDataFromDB,
  deleteMessageDataFromDB,
  getSingleMessageDataFromDB
};
