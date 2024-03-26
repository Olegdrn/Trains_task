import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newInputData, TrainData } from "../../types";

// Define the initial state using that type
const initialState: TrainData[] = [];

export const changeTrainDataSlice = createSlice({
  name: "TrainData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    trainDataAdded: (state, action: PayloadAction<TrainData[]>) => {
      state.push(...action.payload);
    },
    trainDataDeleted: () => {
      return initialState;
    },
    trainDataUpdated: (state, action: PayloadAction<newInputData>) => {
      switch (action.payload.characteristic) {
        case "engineAmperage":
          state[action.payload.id].engineAmperage = action.payload.value;
          break;
        case "speed":
          state[action.payload.id].speed = action.payload.value;
          break;
        case "force":
          state[action.payload.id].force = action.payload.value;
          break;
        default:
          break;
      }
    },
  },
});

export const { trainDataAdded, trainDataDeleted, trainDataUpdated } =
  changeTrainDataSlice.actions;

export default changeTrainDataSlice.reducer;
