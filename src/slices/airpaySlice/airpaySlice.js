import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import AirpayService from "../../services/airpay-service/airpayService";
 


export const getAirpays = createAsyncThunk(
    "airpays/getAirpays",
    async ({}, thunkAPI) => {
      try {
        const response = await AirpayService.getAirpays();
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const addAirpay = createAsyncThunk(
    "airpays/addAirpay",
    async ({ name, locationName, noColonies, fence, electricity }, thunkAPI) => {
      try {
        const response = await AirpayService.addAirpay(name, locationName, noColonies, fence, electricity);
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

const airpaySlice = createSlice({
    name: 'airpays',
    initialState: {
        airpays: [],
        message: null,
        extraReducers: {
            [getAirpays.pending]: (state, action) => {
                state.status = 'loading';
            },
            [getAirpays.fulfilled]: (state, action) => {
                state.airpays = action.payload;
                state.status = 'success';
            },
            [getAirpays.rejected]: (state, action) => {
                state.status = 'filled';
            },
            [addAirpay.pending]: (state, action) => {
              state.status = 'loading';
            },
            [addAirpay.fulfilled]: (state, action) => {
              state.status = 'success';
            },
            [addAirpay.rejected]: (state, action) => {
              state.status = 'filled';
            },
        }
    }
});

const { reducer } = airpaySlice;

export default reducer;