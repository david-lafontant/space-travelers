import { apiService } from "..//api";
import { DragonType } from "../../types/types";

export const dragonService = apiService.injectEndpoints({
  endpoints: (build) => ({
        getDragons: build.query<DragonType, any>({
      query: () => ({ method: "GET", url: "dragons" }),
    }),

  }),
});

export const { useGetDragonsQuery } = dragonService;
