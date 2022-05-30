import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice/authSlice';
import messageReducer from '../slices/messageSlice/messageSlice';
import airpayReducer from '../slices/airpaySlice/airpaySlice';
import singleApiaryReducer  from '../slices/singleApiarySlice/singleApiarySlice';
import gondolasSlice from "../slices/gondolas-slice/gondolasSlice";
import coloniesReducer from "../slices/coloniesSlice/coloniesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        airpays: airpayReducer,
        apiary: singleApiaryReducer,
        gondolas: gondolasSlice,
        colonies: coloniesReducer,
    },
});