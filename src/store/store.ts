import { configureStore } from '@reduxjs/toolkit'

import rocketSlice from '../features/rocket/rocketSLice'
import dragonSlice from '../features/dragon/dragonSlice'
import missionSlice from '../features/mission/missionSlice'

export const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    dragons: dragonSlice,
    missions: missionSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
