import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
    user: getUserFromStorage(),
}


const logOutSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem('user')
            toast.success('logged out')
        }
    }
})

export const { loginUser, logoutUser } = logOutSlice.actions;

export default logOutSlice.reducer






