import mongoose from "mongoose";
import { STATUS } from "../utils/constants.js";


const SingleOrderItemSchema = mongoose.Schema({
    name: { type: String },
    image: { type: String },
    price: { type: Number },
    amount: { type: Number },
    food: {
        type: mongoose.Schema.ObjectId,
        ref: 'Food',
    },
})

const OrderSchema = mongoose.Schema(
    {
        tax: {
            type: Number,
        },
        shippingFee: {
            type: Number,
        },
        subtotal: {
            type: Number,
        },
        total: {
            type: Number,
        },
        orderItems: [SingleOrderItemSchema],
        status: {
            type: String,
            enum: Object.values(STATUS),
            default: STATUS.PENDING,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
        clientSecret: {
            type: String,
        },
        paymentIntentId: {
            type: Number,
        },

    },
    { timestamps: true }
)

export default mongoose.model('Order', OrderSchema)