import Review from '../models/reviewModel.js'
import Food from '../models/foodModel.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/customError.js'
import { checkPermissions } from '../middleware/authMiddleware.js'


export const createReview = async (req, res) => {
    const { food: foodId } = req.body

    const isValidFood = await Food.findOne({ _id: foodId })

    if (!isValidFood) {
        throw new BadRequestError(`No food with id:${foodId}`)
    }

    const alreadySubmitted = await Review.findOne({
        food: foodId, user: req.user.userId
    })

    if (alreadySubmitted) {
        throw new BadRequestError('Already submitted review for this food')
    }

    req.body.user = req.user.userId
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({ review })
}

export const getAllReviews = async (req, res) => {
    const reviews = await Review.find({}).populate({ path: 'food', select: 'name meal price ' }).populate({ path: 'user', select: ' fullName ' });
    res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

export const getSingleReview = async (req, res) => {
    const { id: reviewId } = req.params

    const review = await Review.findOne({ _id: reviewId }).populate({ path: 'food', select: 'name meal price ' }).populate({ path: 'user', select: ' fullName ' });

    if (!review) {
        throw new BadRequestError(`No review with id ${reviewId}`)
    }

    res.status(StatusCodes.OK).json({ review })
}

export const updateReview = async (req, res) => {
    const { id: reviewId } = req.params
    const { rating, title, comment } = req.body;

    const review = await Review.findOne({ _id: reviewId })

    if (!review) {
        throw new BadRequestError(`No review with id ${reviewId}`)
    }

    checkPermissions(req.user, review.user);

    review.rating = rating
    review.title = title
    review.comment = comment

    await review.save()
    res.status(StatusCodes.OK).json({ review })
}

export const deleteReview = async (req, res) => {
    const { id: reviewId } = req.params

    const review = await Review.findOne({ _id: reviewId })

    if (!review) {
        throw new BadRequestError(`No review with id ${reviewId}`)
    }

    checkPermissions(req.user, review.user);
    await review.deleteOne()
    res.status(StatusCodes.OK).json({ msg: 'Success! Review removed' })
}

export const getSingleFoodReviews = async (req, res) => {
    const { id: foodId } = req.params;
    const reviews = await Review.find({ food: foodId }).populate({ path: 'user', select: ' fullName ' }).populate({ path: 'food', select: ' name ' });

    res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};
