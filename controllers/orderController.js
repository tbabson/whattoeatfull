import Order from '../models/OrderModel.js'
import Food from '../models/foodModel.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/customError.js';
import { checkPermissions } from '../middleware/authMiddleware.js'

const fakeStripeAPI = async ({ amount, currency }) => {
    const client_secret = 'someRandomValue'
    return { client_secret, amount }
}


// GET ALL ORDERS CONTROLLER
export const getAllOrders = async (req, res) => {
    const order = await Order.find({}).populate({ path: 'user', select: ' fullName ' })

    res.status(StatusCodes.OK).json({ order, count: order.length })
}

// CREATE ORDER CONTROLLER
export const createOrder = async (req, res) => {
    const { Items: cartItems, tax, shippingFee } = req.body

    if (!cartItems || cartItems.length < 1) {
        throw new BadRequestError('No cart items provided')
    }
    if (!tax || !shippingFee) {
        throw new BadRequestError('please provide tax and shipping fee')
    }

    let orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
        const dbFood = await Food.findOne({ _id: item.food })
        if (!dbFood) {
            throw new NotFoundError(`No food with id : ${item.food}`)
        }
        const { name, price, image, _id } = dbFood
        const singleOrderItem = {
            amount: item.amount,
            name, price, image, food: _id,
        }
        // add item to order
        orderItems = [...orderItems, singleOrderItem]
        //  calculate subTotal
        subtotal += item.amount * price
    }

    // calculate Total
    const total = tax + shippingFee + subtotal

    // get client secret
    const paymentIntent = await fakeStripeAPI({
        amount: total,
        currency: 'NGN'
    })

    const order = await Order.create({
        orderItems, total, subtotal, tax, shippingFee, clientSecret: paymentIntent.client_secret, user: req.user.userId,
    })

    res.status(StatusCodes.CREATED).json({ order, clientSecret: order.clientSecret })
}

// GET SINGLE ORDER CONTROLLER
export const getOrder = async (req, res) => {
    const { id: orderId } = req.params
    const order = await Order.findOne({ _id: orderId }).populate({ path: 'user', select: ' fullName ' })
    if (!order) {
        throw new NotFoundError(`No food with id : ${orderId}`)
    }
    checkPermissions(req.user, order.user)
    res.status(StatusCodes.OK).json({ order, count: order.length })
}

// GET CURRENT USER ORDER CONTROLLER
export const getCurrentUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.userId }).populate({ path: 'user', select: ' fullName ' })

    res.status(StatusCodes.OK).json({ orders, count: orders.length })
}

// EDIT ORDER CONTROLLER
export const updateOrder = async (req, res) => {
    const { id: orderId } = req.params
    const { paymentIntentId } = req.body

    const order = await Order.findOne({ _id: orderId })
    if (!order) {
        throw new NotFoundError(`No food with id : ${orderId}`)
    }
    checkPermissions(req.user, order.user)

    order.paymentIntentId = paymentIntentId
    order.status = 'paid'
    await order.save()

    res.status(StatusCodes.OK).json({ order, count: order.length })
}
