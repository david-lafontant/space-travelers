import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { RocketType } from '../../types/types'

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (data, thunkApi) => {
    try {
      const response = await axios.get<RocketType>(
        'https://api.spacexdata.com/v4/rockets'
      )

      // return response.data
      const transformedItems = []

      for (const element of response.data) {
        const itemObj = { ...element, booked: false }
        transformedItems.push(itemObj)
      }
      return transformedItems
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

interface RocketState {
  loading: boolean
  error: string | null
  data: RocketType | null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as RocketState

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state, action) => {
        state.loading = true
      })
      .addCase(
        getRockets.fulfilled,
        (state, action: PayloadAction<RocketType>) => {
          state.loading = false
          state.data = action.payload
        }
      )
      .addCase(getRockets.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
  },
})

export default rocketSlice.reducer
