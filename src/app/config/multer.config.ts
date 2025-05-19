import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinaryUpload } from './cloudinary,config';

// For image uploads (default)
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
});

export const multerImageUpload = multer({ storage: imageStorage });

// For
const storage = multer.memoryStorage();
export const upload = multer({ storage });
