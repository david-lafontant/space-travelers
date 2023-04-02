import { configureStore } from '@reduxjs/toolkit';
import { rocketService } from '../services/rocket/rocketService';
import { dragonService } from '../services/dragon/dragonService';
import { missionService } from '../services/mission/missionService';

const store = configureStore({
  reducer: {
    [rocketService.reducerPath]: rocketService.reducer,
    [dragonService.reducerPath]: dragonService.reducer,
    [missionService.reducerPath]: missionService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rocketService.middleware, dragonService.middleware, missionService.middleware),
});

export default store;
