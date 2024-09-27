import { Router } from "express";
const router = Router()
import { getAllFoods, getFood, createFood, updateFood, uploadFoodImage, deleteFood } from "../controllers/foodController.js";

import { getSingleFoodReviews } from '../controllers/reviewController.js'

import { validateFoodInput, validateIdParam } from "../middleware/validationMiddleware.js";
import { authenticateUser, authorizePermissions } from "../middleware/authMiddleware.js";



router.route('/').get(getAllFoods).post(validateFoodInput, authenticateUser, authorizePermissions("admin"), createFood)

router.route('/uploadImage').post(authenticateUser, authorizePermissions("admin"), uploadFoodImage)

router.route('/:id').get(validateIdParam, getFood).patch(validateIdParam, authenticateUser, authorizePermissions("admin"), updateFood).delete(validateIdParam, authenticateUser, authorizePermissions("admin"), deleteFood)

router.route('/:id/reviews').get(getSingleFoodReviews);

export default router


// upload.single('image'),