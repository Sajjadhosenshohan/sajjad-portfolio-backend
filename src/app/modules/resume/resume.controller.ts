import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ResumeServices } from './resume.service';

const addResumeIntoDB = catchAsync(async (req, res) => {
  const result = await ResumeServices.addResumeIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'New Resume added Successfully',
    data: result,
  });
});
const getAllResumeDataFromDB = catchAsync(async (req, res) => {
  const result = await ResumeServices.getAllResumeDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All Resume retrieved successfully',
    data: result,
  });
});
const updateResumeFromDB = catchAsync(async (req, res) => {
   const {id, ...skillInfo} = req.body;
  const result = await ResumeServices.updateResumeFromDB(id,skillInfo);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Resume updated successfully',
    data: result,
  });
});
const deleteResumeFromDB = catchAsync(async (req, res) => {
  const result = await ResumeServices.deleteResumeFromDB(req.query.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Resume deleted successfully',
    data: result,
  });
});

export const ResumeController = {
  addResumeIntoDB,
  getAllResumeDataFromDB,
  deleteResumeFromDB,
  updateResumeFromDB
};
