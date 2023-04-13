import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { MissionType } from '../../types/types'

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (data, thunkApi) => {
    try {
      const response = await axios.get<MissionType>(
        'https://api.spacexdata.com/v3/missions'
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

interface MissionState {
  loading: boolean
  error: string | null
  data: MissionType | null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as MissionState

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMissions.pending, (state, action) => {
        state.loading = true
      })
      .addCase(
        getMissions.fulfilled,
        (state, action: PayloadAction<MissionType>) => {
          state.loading = false
          state.data = action.payload
        }
      )
      .addCase(getMissions.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
  },
})

export default missionSlice.reducer
