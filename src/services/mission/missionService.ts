import { apiService } from "..//api";
import { MissionType } from "../../types/types";

export const missionService = apiService.injectEndpoints({
  endpoints: (build) => ({
        getMissions: build.query<MissionType, null>({
      query: () => ({ method: "GET", url: "missions" }),
    }),

  }),
});

export const { useGetMissionsQuery } = missionService;
