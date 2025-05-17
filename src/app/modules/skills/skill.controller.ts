import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {  SkillServices } from './skill.service';

const addSkillsIntoDB = catchAsync(async (req, res) => {
  const result = await SkillServices.addSkillsIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'New skill added Successfully',
    data: result,
  });
});
const getAllSkillDataFromDB = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All skill retrieved successfully',
    data: result,
  });
});
const updateSkillFromDB = catchAsync(async (req, res) => {
   const {id, ...skillInfo} = req.body;
  const result = await SkillServices.updateSkillFromDB(id,skillInfo);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});
const deleteSkillFromDB = catchAsync(async (req, res) => {
  const result = await SkillServices.deleteSkillFromDB(req.query.id as string);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillsController = {
  addSkillsIntoDB,
  getAllSkillDataFromDB,
  deleteSkillFromDB,
  updateSkillFromDB
};
