import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice/authSlice';
import messageReducer from '../slices/messageSlice/messageSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer
    },
});