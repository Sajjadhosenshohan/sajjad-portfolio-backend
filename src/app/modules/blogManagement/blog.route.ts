import express from 'express';
import { blogController } from './blog.controller';

const router = express.Router();

router.post('/add-blog',blogController.addBlogData);
router.get('/', blogController.getAllBlogData);
router.delete('/delete-blog', blogController.deleteBlogData);
router.put('/update-blog', blogController.updateBlogData);

export const blogRoutes = router;
