import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinaryUpload } from './cloudinary,config';

// For image uploads (default)
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
});

export const multerImageUpload = multer({ storage: imageStorage });

// For PDF uploads (resource_type: raw)
const pdfStorage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: {
    folder: 'resumes',
    resource_type: 'raw',
    access_mode: 'public',
    allowed_formats: ['pdf'],
    public_id: (req, file) => {
      const uniqueName = Date.now() + '-' + file.originalname;
      return uniqueName.replace(/\s/g, '_');
    },
  },
});

export const multerPdfUpload = multer({ storage: pdfStorage });


// For memory storage (for other types of files)

const storage = multer.memoryStorage();
export const upload = multer({ storage });
