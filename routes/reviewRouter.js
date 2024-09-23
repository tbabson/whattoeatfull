import { Router } from "express";
const router = Router()

import { createReview, getAllReviews, getSingleReview, updateReview, deleteReview } from "../controllers/reviewController.js";



import { authenticateUser, authorizePermissions } from "../middleware/authMiddleware.js";
import { validateReviewInput } from "../middleware/validationMiddleware.js";


router.route('/').post(authenticateUser, createReview).get(authenticateUser, getAllReviews);

router.route('/:id').get(authenticateUser, getSingleReview).patch(authenticateUser, updateReview).delete(authenticateUser, deleteReview)


export default router