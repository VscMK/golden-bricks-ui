import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import GondolaService from '../../services/gondolas-service/gondolasService';
 


export const getGondolas = createAsyncThunk(
    'gondola',
    async (thunkAPI) => {
      try{
        const response = await GondolaService.getGondolas();
        return response;
      } catch (error) {
        return error?.response;
      }
    }
  );

  export const addGondola = createAsyncThunk(
    "airpays/addGondola",
    async ({ id }, thunkAPI) => {
      try {
        const response = await GondolaService.addGondola(id);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );

  const initialState = {
    gondolas: [],
    loading: false,
    error: false,
  }

const gondolaSlice = createSlice({
    name: 'gondolas',
    initialState,
    extraReducers: {
    [getGondolas.pending]: (state, action) => {
    state.loading = true;
    },
    [getGondolas.fulfilled]: (state, {payload}) => {
      state.gondolas = payload;
      state.loading = false;
    },
    [getGondolas.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addGondola.pending]: (state, action) => {
    state.status = 'loading';
    },
    [addGondola.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [addGondola.rejected]: (state, action) => {
    state.status = 'failed';
    },
  }
    
});

export default gondolaSlice.reducer;