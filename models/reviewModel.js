import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    title: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    comment: {
        type: String,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    food: {
        type: mongoose.Schema.ObjectId,
        ref: 'Food',
    },
},
    { timestamps: true }
)
ReviewSchema.index({ food: 1, user: 1 }, { unique: true, sparse: true })

ReviewSchema.statics.calculateAverageRating = async function (foodId) {
    const result = await this.aggregate([
        { $match: { food: foodId } }, {
            $group: {
                _id: null, averageRating: { $avg: "$rating" },
                numOfReviews: { $sum: 1 }
            }
        }
    ])
    try {
        await this.model('Food').findOneAndUpdate(
            { _id: foodId },
            {
                averageRating: Math.ceil(result[0]?.averageRating || 0),
                numOfReviews: result[0]?.numOfReviews || 0,

            }
        )
    } catch (error) {
        console.log(error);
    }
}

ReviewSchema.post('save', async function () {
    await this.constructor.calculateAverageRating(this.food)

})

ReviewSchema.post('deleteOne', { document: true, query: false }, async function () {
    await this.constructor.calculateAverageRating(this.food);
});



export default mongoose.model('Review', ReviewSchema)