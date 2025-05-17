import express, { NextFunction, Request, Response } from "express";
import { ResumeController } from "./resume.controller";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { multerPdfUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/add-resume",
  auth(UserRole.ADMIN),
  multerPdfUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    if (req.file) {
      req.body.pdfUrl = req?.file?.path;
    }
    next();
  },
 ResumeController.addResumeIntoDB
);
router.get("/", ResumeController.getAllResumeDataFromDB);
router.put(
  "/update-resume",
  auth(UserRole.ADMIN),
  multerPdfUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    if (req.file) {
      req.body.pdfUrl = req?.file?.path;
    }
    next();
  },
  ResumeController.updateResumeFromDB
);
router.delete(
  "/delete-resume",
  auth(UserRole.ADMIN),
  ResumeController.deleteResumeFromDB
);

export const ResumeRoutes = router;
