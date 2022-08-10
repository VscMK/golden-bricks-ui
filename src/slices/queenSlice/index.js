import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import QueenService from '../../services/queen-service';
import { useDispatch } from 'react-redux';
 


export const getQueen = createAsyncThunk(
    'queen/getQueen',
    async (thunkAPI) => {
      try{
        const response = await QueenService.getQueen();
        return response;
      } catch (error) {
        return error?.response;
      }
    }
  );

export const addQueen = createAsyncThunk(
    "queen/addQueen",
    async ({ apiary_id,gondola_id,colony_id,color_plate,
        number_on_plate,
        queen_number,
        clipped,
        mating_status,
        marked }, thunkAPI) => {
      try {
        const response = await QueenService.addQueen(apiary_id,gondola_id,colony_id,color_plate,
            number_on_plate,
            queen_number,
            clipped,
            mating_status,
            marked);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );
  
  export const updateQueen = createAsyncThunk(
    'queen/editQueen',
    async ({ apiary_id,gondola_id,colony_id,color_plate,
        number_on_plate,
        queen_number,
        clipped,
        mating_status,
        marked }, thunkAPI) => {
      try {
        const response = await QueenService.updateQueen(apiary_id,gondola_id,colony_id,color_plate,
            number_on_plate,
            queen_number,
            clipped,
            mating_status,
            marked);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  )

  export const deleteQueen = createAsyncThunk(
    "queen/deleteQueen",
    async (queen, thunkAPI) => {
      try {
        const response = await QueenService.deleteQueen(queen);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );

  const initialState = {
    queen: [],
    loading: false,
    error: false,
  }

const queenSlice = createSlice({
    name: 'queen',
    initialState,
    extraReducers: {
    [getQueen.pending]: (state, action) => {
    state.loading = true;
    },
    [getQueen.fulfilled]: (state, {payload}) => {
      state.airpays = payload;
      state.loading = false;
    },
    [getQueen.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addQueen.pending]: (state, action) => {
    state.status = 'loading';
    },
    [addQueen.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [addQueen.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [updateQueen.pending]: (state, action) => {
    state.status = 'loading';
    },
    [updateQueen.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [updateQueen.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [deleteQueen.pending]: (state, action) => {
    state.status = 'loading';
    },
    [deleteQueen.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [deleteQueen.rejected]: (state, action) => {
    state.status = 'failed';
    },
  }
 
});

export default queenSlice.reducer;