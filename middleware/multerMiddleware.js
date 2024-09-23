import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname
        cb(null, fileName)
    },
})

export const upload = multer({ storage })



// upload = multer({
//     storage: new CloudinaryStorage({
//         cloudinary: cloudinary,
//         params: {
//             folder: 'wte-food-images',
//         },
//     }),
// });

// export default upload
