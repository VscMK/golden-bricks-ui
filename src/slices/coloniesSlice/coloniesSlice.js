import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ColonyService from "../../services/colonyService/colonyService";

export const getColonies = createAsyncThunk(
  'colonies/getColonies',
  async (thunkApi) => {
      try{
      const response = await ColonyService.getColonies();
      console.log('response:: ', response);
      return response;
    } catch (error) {
      return error?.response;
    }
  }
);

export const addColony = createAsyncThunk(
    'colonies/addColony',
    async ({ apiaryId, gondolaId, noBoxes, queenId, queenAlarm  }, thunkAPI) => {
      try {
        const response = await ColonyService.addColony(apiaryId, gondolaId, noBoxes, queenId, queenAlarm );
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

const coloniesSlice = createSlice({
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
    }
  }
});

export default coloniesSlice.reducer;