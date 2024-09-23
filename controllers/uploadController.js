import { StatusCodes } from 'http-status-codes'
import path from 'path';
import cloudinary from 'cloudinary'
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



// UPLOAD IMAGE CONTROLLER
export const uploadFoodImage = async (req, res) => {
    const foodImage = req.files.image
    const imagePath = path.join(__dirname, '../public/uploads/' + `${foodImage.name}`);
    await foodImage.mv(imagePath)

    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${foodImage.name}` } })
};