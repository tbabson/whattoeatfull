import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customError.js';
import { MEAL, COUNTRY, STATUS } from '../utils/constants.js';
import mongoose from 'mongoose';
import Food from '../models/foodModel.js';
import User from '../models/userModel.js';
import Order from '../models/OrderModel.js';

const withValidationErrors = (validateValues) => {
    return [
        validateValues, (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith('no food')) {
                    throw new NotFoundError(errorMessages)
                }
                throw new BadRequestError(errorMessages)
            }
            next()
        },
    ]
}

// FOOD INPUT VALIDATION
export const validateFoodInput = withValidationErrors([
    body('image').notEmpty().withMessage('image is required'),
    body('name').notEmpty().withMessage('name is required'),
    body('price').notEmpty().withMessage('price is required'),
    body(['ingredients']).notEmpty().withMessage('ingredients is required'),
    body(['howToPrepare']).notEmpty().withMessage('how to prepare is required'),
    body('meal').isIn(Object.values(MEAL)).withMessage('invalid meal value'),
    body('country').isIn(Object.values(COUNTRY)).withMessage('invalid country value'),
])

// FOOD ID VALIDATION
export const validateIdParam = withValidationErrors([
    param('id').custom(async (value) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new BadRequestError('invalid food id')
        const food = await Food.findById(value)
        if (!food) throw new NotFoundError(`no food with the id ${value}`)
        //May need to restrict users view of the foods by watching the Validate owner video.
    })
])

// REGISTER VALIDATION
export const validateRegisterInput = withValidationErrors([
    body('fullName').notEmpty().withMessage('full name is required'),
    body('address').notEmpty().withMessage('address is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async (email) => {
        const user = await User.findOne({ email })
        if (user) {
            throw new BadRequestError('email already exists')
        }
    }),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8 }).withMessage('password must be at least 8 characters long'),
])


// USER PASSWORD UPDATE VALIDATION
export const validateUserPasswordChange = withValidationErrors([
    body('oldPassword').notEmpty().withMessage('old password is required'),
    body('newPassword').notEmpty().withMessage('new password is required'),
])


// LOGIN VALIDATION
export const validateLoginInput = withValidationErrors([
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),

])

// USER UPDATE VALIDATION
export const validateUpdateUserInput = withValidationErrors([
    body('fullName').notEmpty().withMessage('full name is required'),
    body('address').notEmpty().withMessage('address is required'),
    // body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email format').custom(async (email, { req }) => {
    //     const user = await User.findOne({ email })
    //     if (user && user._id.toString() !== req.user.userId) {
    //         throw new BadRequestError('email already exists')
    //     }
    // }),
    body('location').notEmpty().withMessage('location is required'),
])

// ORDER VALIDATION
export const validateOrder = withValidationErrors([
    body('tax').notEmpty().withMessage('tax is required'),
    body('shippingFee').notEmpty().withMessage('shipping fee is required'),
    body('subtotal').notEmpty().withMessage('subtotal is required'),
    body('total').notEmpty().withMessage('total is required'),
    body('user').notEmpty().withMessage('user is required'),
    body('clientSecret').notEmpty().withMessage('clientSecret is required'),
    body('orderItems').notEmpty().withMessage('orderItems is required'),
    body('paymentIntentId').notEmpty().withMessage('paymentIntentId is required'),
    body('status').isIn(Object.values(STATUS)).withMessage('invalid status value'),
])

// // ORDER ID VALIDATION
export const validateOrderIdParam = withValidationErrors([
    param('id').custom(async (value) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new BadRequestError('invalid order id')
        const order = await Order.findById(value)
        if (!order) throw new NotFoundError(`no order with the id ${value}`)
    })
])


// USER REVIEW VALIDATION
export const validateReviewInput = withValidationErrors([
    body('rating').notEmpty().withMessage('rating is required'),
    body('title').notEmpty().withMessage('title is required'),
    body('comment').notEmpty().withMessage('comment is required'),
    body('user').notEmpty().withMessage('user is required'),
    body('food').notEmpty().withMessage('food is required'),
])

