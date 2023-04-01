import { configureStore } from '@reduxjs/toolkit';
import { rocketService } from '../features/rockets/rocketSlice';

export const store = configureStore({
  reducer: {
    [rocketService.reducerPath]: rocketService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rocketService.middleware),
});
