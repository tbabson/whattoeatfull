import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/customFetch';

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async (_, thunkAPI) => {
        try {
            const response = await customFetch.get('/users/currentUser');
            // Save the data to local storage
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            console.log(response.data);
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    user: JSON.parse(localStorage.getItem('currentUser')) || null, // Get user from local storage if available
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});



export default userSlice.reducer






