import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotsStateStructure } from "./types";
import { RobotStructure } from "../../types";

const robotsInitialState: RobotsStateStructure = {
  robotsData: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (
      currentRobotsState: RobotsStateStructure,
      action: PayloadAction<RobotStructure[]>
    ) => ({
      ...currentRobotsState,
      robotsData: action.payload,
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
