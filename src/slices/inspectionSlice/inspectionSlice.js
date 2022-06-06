import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice/messageSlice';
import InspectionService from '../../services/inspection-service/inspectionService';
 


export const getInspections = createAsyncThunk(
    'inspections/getInspections',
    async (thunkAPI) => {
      try{
        const response = await InspectionService.getInspection();
        return response;
      } catch (error) {
        return error?.response;
      }
    }
  );

  export const addInspection = createAsyncThunk(
    "inspections/addInspection",
    async ({ apiary_id,
        colony_id,
        number_of_boxes,
        number_occupied_combs,
        number_brood_combs,
        queen_status,
        queen_status_change_reason,
        swarming_tendency,
        varoa,
        natural_varoa,
        colony_loss,
        pollen,
        honey,
        hygiene,
        bees_gentleness,
        food,
        food_type,
        food_ammount,
        health_condition,
        attention_needed,
        attention_needed_time,
        total_weight,
        comment }, thunkAPI) => {
      try {
        const response = await InspectionService.addInspection(apiary_id,
            colony_id,
            number_of_boxes,
            number_occupied_combs,
            number_brood_combs,
            queen_status,
            queen_status_change_reason,
            swarming_tendency,
            varoa,
            natural_varoa,
            colony_loss,
            pollen,
            honey,
            hygiene,
            bees_gentleness,
            food,
            food_type,
            food_ammount,
            health_condition,
            attention_needed,
            attention_needed_time,
            total_weight,
            comment);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );
  
  export const updateInspection = createAsyncThunk(
    'inspections/updateInspection',
    async ({id, number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
        varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
      total_weight,comment }, thunkAPI) => {
      try {
        const response = await InspectionService.updateInspection(id,number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
            varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
          total_weight,comment);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  )

  export const deleteInspection = createAsyncThunk(
    "inspections/deleteInspection",
    async (inspection, thunkAPI) => {
      try {
        const response = await InspectionService.deleteInspection(inspection);
        return response.data;
     } catch (error) {
      return error?.response;   
      }
    }
  );

  const initialState = {
    inspections: [],
    loading: false,
    error: false,
  }

const inspectionSlice = createSlice({
    name: 'inspections',
    initialState,
    extraReducers: {
    [getInspections.pending]: (state, action) => {
    state.loading = true;
    },
    [getInspections.fulfilled]: (state, {payload}) => {
      state.airpays = payload;
      state.loading = false;
    },
    [getInspections.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addInspection.pending]: (state, action) => {
    state.status = 'loading';
    },
    [addInspection.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [addInspection.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [updateInspection.pending]: (state, action) => {
    state.status = 'loading';
    },
    [updateInspection.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [updateInspection.rejected]: (state, action) => {
    state.status = 'failed';
    },
    [deleteInspection.pending]: (state, action) => {
    state.status = 'loading';
    },
    [deleteInspection.fulfilled]: (state, action) => {
    state.status = 'success';
    },
    [deleteInspection.rejected]: (state, action) => {
    state.status = 'failed';
    },
  }
    
});

export default inspectionSlice.reducer;