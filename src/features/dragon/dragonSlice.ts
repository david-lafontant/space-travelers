import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { DragonType } from '../../types/types'

export const getDragons = createAsyncThunk(
  'dragons/getDragons',
  async (data, thunkApi) => {
    try {
      const response = await axios.get<DragonType>(
        'https://api.spacexdata.com/v4/dragons'
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

interface DragonState {
  loading: boolean
  error: string | null
  data: DragonType | null
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as DragonState

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDragons.pending, (state, action) => {
        state.loading = true
      })
      .addCase(
        getDragons.fulfilled,
        (state, action: PayloadAction<DragonType>) => {
          state.loading = false
          state.data = action.payload
        }
      )
      .addCase(getDragons.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
  },
})

export default dragonSlice.reducer
