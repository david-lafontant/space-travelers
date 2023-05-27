import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { ADragon, DragonType } from '../../types/types';

export const getDragons = createAsyncThunk(
  'dragons/getDragons',
  async (data, thunkApi) => {
    try {
      const response = await axios.get<DragonType>(
        'https://api.spacexdata.com/v4/dragons',
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

interface DragonState {
  loading: boolean
  error: string | null
  data: DragonType | null
  refresh: number
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  refresh: 0,
} as DragonState;

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    toggleBooking: (state, { payload }) => {
      const dragon: ADragon | undefined = state.data?.find(
        (item) => item.id === payload,
      );
      if (dragon) {
        dragon.booked = !dragon.booked;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getDragons.fulfilled,
        (state, action: PayloadAction<DragonType>) => {
          state.loading = false;
          state.refresh = 1;
          state.data = action.payload;
        },
      )
      .addCase(getDragons.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { toggleBooking } = dragonSlice.actions;
export default dragonSlice.reducer;
