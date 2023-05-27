import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AMission, MissionType } from '../../types/types';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (data, thunkApi) => {
    try {
      const response = await axios.get<MissionType>(
        'https://api.spacexdata.com/v3/missions',
      );

      // return response.data
      const transformedItems = [];

      for (const element of response.data) {
        const itemObj = { ...element, booked: false };
        transformedItems.push(itemObj);
      }
      return transformedItems;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  },
);

interface MissionState {
  loading: boolean
  error: string | null
  data: MissionType | null
  refresh: number
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  refresh: 0,
} as MissionState;

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    toggleBooking: (state, { payload }) => {
      const mission: AMission | undefined = state.data?.find(
        (item) => item.mission_id === payload,
      );
      if (mission) {
        mission.booked = !mission.booked;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getMissions.fulfilled,
        (state, action: PayloadAction<MissionType>) => {
          state.loading = false;
          state.refresh = 1;
          state.data = action.payload;
        },
      )
      .addCase(getMissions.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { toggleBooking } = missionSlice.actions;
export default missionSlice.reducer;
