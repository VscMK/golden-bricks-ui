import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import AirpayService from "../../services/airpay-service/airpayService";
 


export const getAirpays = createAsyncThunk(
    'airpays/getAirpays',
    async (thunkAPI) => {
      try{
        const response = await AirpayService.getAirpays();
        return response;
      } catch (error) {
        return error?.response;
      }
    }
  );

  export const addAirpay = createAsyncThunk(
    "airpays/addAirpay",
    async ({ name, locationName, noColonies, fence, electricity }, thunkAPI) => {
      try {
        const response = await AirpayService.addAirpay(name, locationName, noColonies, fence, electricity);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );

  // export const logout = createAsyncThunk(
  //   "auth/logout",
  //   async () => {
  //   await AuthService.logout();
  // });
  

  export const updateApiary = createAsyncThunk(
    'airpays/editApiary',
    async ({ id, name, locationName, noColonies, fence, electricity }, thunkAPI) => {
      try {
        const response = await AirpayService.updateApiary(id, name, locationName, noColonies, fence, electricity);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  )

  export const deleteAirpay = createAsyncThunk(
    "airpays/deleteAirpay",
    async (apiary, thunkAPI) => {
      try {
        const response = await AirpayService.deleteAirpay(apiary);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );

  const initialState = {
    airpays: [],
    apiary: null,
    loading: false,
    error: false,
  }

const airpaySlice = createSlice({
    name: 'airpays',
    initialState,
    // reducers: {
    //   apiary: (state, action) => action.payload
    // },
    extraReducers: {
    [getAirpays.pending]: (state, action) => {
    state.loading = true;
    },
    [getAirpays.fulfilled]: (state, {payload}) => {
      state.airpays = payload;
      state.loading = false;
    },
    [getAirpays.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addAirpay.pending]: (state, action) => {
    state.status = 'loading';
    },
    [addAirpay.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [addAirpay.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [updateApiary.pending]: (state, action) => {
    state.status = 'loading';
    },
    [updateApiary.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [updateApiary.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [deleteAirpay.pending]: (state, action) => {
    state.status = 'loading';
    },
    [deleteAirpay.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [deleteAirpay.rejected]: (state, action) => {
    state.status = 'failed';
    },
  }
    
});

export default airpaySlice.reducer;