import mongoose from "mongoose";
import { MEAL, COUNTRY } from "../utils/constants.js"
import _default from "http-status-codes";


const FoodSchema = new mongoose.Schema(
    {
        image: {
            type: String,

        },
        name: {
            type: String,
            default: 'Fufu',
        },
        meal: {
            type: String,
            enum: Object.values(MEAL),
            default: MEAL.BREAKFAST,
        },
        price: {
            type: Number,
            default: 500,
        },
        country: {
            type: String,
            enum: Object.values(COUNTRY),
            default: COUNTRY.NIGERIA,
        },
        ingredients: {
            type: Array,
            default: ["Cassava"],
        },
        howToPrepare: {
            type: Array,
            default: ["Ferment the cassava", "Dry out water", "Cook"],
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        averageRating: {
            type: Number,
            default: 0,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },

    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

FoodSchema.virtual('reviews', {
    ref: 'Review', localField: '_id', foreignField: 'food',
    justOne: false,
    // match: { rating: 5 },
})

FoodSchema.pre('deleteOne', { document: false, query: true }, async function () {
    const foodId = this.getFilter()._id;
    await mongoose.model('Review').deleteMany({ food: foodId });
});


export default mongoose.model('Food', FoodSchema)