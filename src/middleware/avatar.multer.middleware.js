import multer from "multer";
import path from 'path'

const upload = multer({
    dest: 'upload/',
    limits: {fileSize: 20*1024*1024},

    storage: multer.diskStorage({
        destination: 'upload/',
        filename: (req, file, cb)=>{
            cb(null, file.originalname)
        }
    }),

    fileFilter: (req, file, cb)=>{
        const extension= path.extname(file.originalname)
        if( 
            extension !== '.png' &&
            extension !== '.jpg' &&
            extension !== '.jpeg' &&
            extension !== '.webp'
        ){
            cb(null, flase)
            return
        }
        cb(null, true)
    }

})

export default upload