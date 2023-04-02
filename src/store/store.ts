import { configureStore } from '@reduxjs/toolkit';
import { rocketService } from '../services/rocket/rocketService';

export const store = configureStore({
  reducer: {
    [rocketService.reducerPath]: rocketService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rocketService.middleware),
});
