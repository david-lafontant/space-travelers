import { apiService } from "../../services/api";
import RocketType from "../../types/rocketsTypes";



export const rocketService = apiService.injectEndpoints({
  endpoints: (build) => ({
        getRockets: build.query<RocketType, null>({
      query: () => ({ method: "GET", url: "rockets" }),
    }),

  }),
});

// Auto-generated hooks
export const { useGetRocketsQuery } = rocketService;
