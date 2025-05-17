import express from 'express';
import { ContactController } from './contact.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';

const router = express.Router();

router.post('/add-message',ContactController.addMessageData);
router.get('/',auth(UserRole.ADMIN), ContactController.getAllMessageData);


export const contactRoutes = router;
