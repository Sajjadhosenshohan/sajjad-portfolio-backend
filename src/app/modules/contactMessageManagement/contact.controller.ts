import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ContactServices } from './contact.service';

const addMessageData = catchAsync(async (req, res) => {
  const result = await ContactServices.addMessageIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message Sent Successfully',
    data: result,
  });
});
const getAllMessageData = catchAsync(async (req, res) => {
  const result = await ContactServices.getAllMessageDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All Message retrived successfully',
    data: result,
  });
});

const deleteMessageDataFromDB = catchAsync(async (req, res) => {
  const result = await ContactServices.deleteMessageDataFromDB(req.query.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message deleted successfully',
    data: result,
  });
});

const getSingleMessageDataFromDB = catchAsync(async (req, res) => {
  const result = await ContactServices.getSingleMessageDataFromDB(req.query.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message retrieved successfully',
    data: result,
  });
});

export const ContactController = {
  addMessageData,
  getAllMessageData,
  deleteMessageDataFromDB,
  getSingleMessageDataFromDB
};
