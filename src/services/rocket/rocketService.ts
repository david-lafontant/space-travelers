import { apiService } from '../api';
import { RocketType } from '../../types/types';

export const rocketService = apiService.injectEndpoints({
  endpoints: (build) => ({
        getRockets: build.query<RocketType, any>({
      query: () => ({ method: 'GET', url: 'rockets' }),
    }),

  }),
});

// Auto-generated hooks
export const { useGetRocketsQuery } = rocketService;
