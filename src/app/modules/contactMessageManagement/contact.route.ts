import express from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import { ContactController } from './contact.controller';

const router = express.Router();

router.post('/add-message',ContactController.addMessageData);
router.get('/',auth(UserRole.ADMIN), ContactController.getAllMessageData);
router.delete('/delete-message',auth(UserRole.ADMIN), ContactController.deleteMessageDataFromDB);


export const MessageRoutes = router;
