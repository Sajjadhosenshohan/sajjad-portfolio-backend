import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ContactServices } from './contact.service';

const addMessageData = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await ContactServices.addMessageIndoDB(req.body);
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

export const ContactController = {
  addMessageData,
  getAllMessageData,
};
