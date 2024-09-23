// PACKAGE IMPORTS
import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from 'express-fileupload'
import cors from 'cors'



// CUSTOM IMPORTS
// routers
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRouter.js'
import orderRouter from './routes/orderRouter.js'
import reviewRouter from './routes/reviewRouter.js'

// Middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


// PUBLIC 
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";



const __dirname = dirname(fileURLToPath(import.meta.url))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors())

app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.resolve(__dirname, './public')))
app.use(fileUpload({ useTempFiles: true }))


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get("/api/v1/test", (req, res) => {
    res.json({ msg: "test route" });
});


app.use('/api/v1/foods', foodRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/auth', authRouter)


app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`server running on PORT ${port}...`);
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}

