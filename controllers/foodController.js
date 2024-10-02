import Food from '../models/foodModel.js'
import { StatusCodes } from 'http-status-codes'
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { BadRequestError } from '../errors/customError.js';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// GET ALL FOODS CONTROLLER
export const getAllFoods = async (req, res) => {
    const foods = await Food.find({})
    res.status(StatusCodes.OK).json({ foods, count: foods.length })
}

// CREATE FOOD CONTROLLER
export const createFood = async (req, res) => {
    req.body.createdBy = req.user.userId
    const food = await Food.create(req.body)
    res.status(StatusCodes.CREATED).json({ food })

}

// GET SINGLE FOOD CONTROLLER
export const getFood = async (req, res) => {
    // note you can write the code in a single line, as seen below.
    const food = await Food.findById(req.params.id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'user',
                select: 'fullName',
            },
        });

    res.status(StatusCodes.OK).json({ food })
}

// EDIT FOOD CONTROLLER
export const updateFood = async (req, res) => {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(StatusCodes.OK).json({ msg: 'food modified', food: updatedFood })
}

// DELETE FOOD CONTROLLER
export const deleteFood = async (req, res) => {

    const foodToDelete = await Food.findById(req.params.id);

    if (!foodToDelete) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Food not found' });
    }

    await Food.deleteOne({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ msg: 'Food deleted', food: foodToDelete });
}

// UPLOAD IMAGE CONTROLLER
export const uploadFoodImageLocal = async (req, res) => {
    if (!req.files) {
        throw new BadRequestError('No file uploaded')
    }

    const foodImage = req.files.image
    if (!foodImage.mimetype.startsWith('image')) {
        throw new BadRequestError('Unsupported file format')
    }

    const maxSize = 1024 * 1024

    if (foodImage.size > maxSize) {
        throw new BadRequestError('File is too large')
    }

    const imagePath = path.join(__dirname, '../public/uploads/' + `${foodImage.name}`);
    await foodImage.mv(imagePath)

    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${foodImage.name}` } })

};

export const uploadFoodImage = async (req, res) => {
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: 'wte-food-images',
        }
    )
    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
}

