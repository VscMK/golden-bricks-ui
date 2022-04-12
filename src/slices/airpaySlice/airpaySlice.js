import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import AirpayService from "../../services/airpay-service/airpayService";
 


export const getAirpays = createAsyncThunk(
    "airpays/getAirpays",
    async ({ name, locationName, noColonies, fence, electricity }, thunkAPI) => {
      try {
        const response = await AirpayService.getAirpays(name, locationName, noColonies, fence, electricity);
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
        }
    }
});

const { reducer } = airpaySlice;

export default reducer;