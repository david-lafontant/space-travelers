import { configureStore } from '@reduxjs/toolkit'

import rocketSlice from '../features/rocket/rocketSLice'

export const store = configureStore({
  reducer: rocketSlice,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
