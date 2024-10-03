import { configureStore } from "@reduxjs/toolkit"
import logOutReducer from '../src/features/user/logoutSlice'
import userReducer from '../src/features/user/userSlice'



export const store = configureStore({
    reducer: {
        userLogOutState: logOutReducer,
        userState: userReducer,
    }
})