import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';

const addBlogData = catchAsync(async (req, res) => {
  const email = req?.user?.email as string;

  const result = await blogServices.addBlogDataIndoDB(email, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data Added Successfully',
    data: result,
  });
});
const getAllBlogData = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogDataFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data retrived successfully',
    data: result,
  });
});
const deleteBlogData = catchAsync(async (req, res) => {
  // console.log(req.body.id);
  const result = await blogServices.deletedBlogIntoDB(req?.query?.id as string);
  // console.log(result);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data deleted successfully',
    data: result,
  });
});
const updateBlogData = catchAsync(async (req, res) => {
  const {id, ...blogInfo} = req.body;
  const result = await blogServices.updateBlogIntoDB(id, blogInfo);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data updated successfully',
    data: result,
  });
});

export const blogController = {
 addBlogData,
 getAllBlogData,
 deleteBlogData,
 updateBlogData
};
