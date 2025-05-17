import express from "express";
import { projectController } from "./project.controller";
import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { multerImageUpload } from "../../config/multer.config";
const router = express.Router();

router.post(
  "/add-project",
  auth(UserRole.ADMIN),
  multerImageUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    if (req.file) {
      req.body.product_image = req?.file?.path;
    }
    next();
  },
  projectController.addProjectData
);

router.get("/", projectController.getAllProjectData);
router.delete("/delete-project",auth(UserRole.ADMIN), projectController.deleteProjectData);
router.put(
  "/update-project",
  auth(UserRole.ADMIN),
  multerImageUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  projectController.updateProjectData
);

export const projectRoutes = router;
