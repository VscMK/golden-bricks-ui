import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ColonyService from '../../services/colony-service';
 


export const getColonies = createAsyncThunk(
    'colonies',
    async (thunkAPI) => {
      try{
        const response = await ColonyService.getColonies();
        return response;
      } catch (error) {
        return error?.response;
      }
    }
  );

  export const addColony = createAsyncThunk(
    "colonies/addColony",
    async ({ apiary_id, gondola_id, no_boxes,
    queen_id,
    queen_alarm }, thunkAPI) => {
      try {
        const response = await ColonyService.addColony(apiary_id, gondola_id, no_boxes,
          queen_id,
          queen_alarm);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );
  export const updateColony = createAsyncThunk(
    'colonies/editColony',
    async ({ id, no_boxes,
      queen_id,
      queen_alarm }, thunkAPI) => {
        try {
          const response = await ColonyService.updateColony(id,no_boxes,
            queen_id,
            queen_alarm);
          return response.data;
       } catch (error) {
        return error?.response;   
        }
      }
  )
  export const deleteColony = createAsyncThunk(
    'colonies/deleteColony',
    async(id, thunkAPI) => {
      try{
        const response = await ColonyService.deleteColony(id);
        return response.data;
      } catch (error) {
        return error?.response;
      }
    }
  );

  const initialState = {
    colonies: [],
    loading: false,
    error: false,
  }

const colonySlice = createSlice({
    name: 'colonies',
    initialState,
    extraReducers: {
    [getColonies.pending]: (state, action) => {
    state.loading = true;
    },
    [getColonies.fulfilled]: (state, {payload}) => {
      state.colonies = payload;
      state.loading = false;
    },
    [getColonies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addColony.pending]: (state, action) => {
    state.status = 'loading';
    },
    [addColony.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [addColony.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [updateColony.pending]: (state, action) => {
    state.status = 'loading';
    },
    [updateColony.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [updateColony.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [deleteColony.pending]: (state, action) => {
    state.status = 'loading';
    },
    [deleteColony.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [deleteColony.rejected]: (state, action) => {
    state.status = 'failed';
    },
  }
    
});

export default colonySlice.reducer;