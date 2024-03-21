import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Characteristics {
  speed: number;
  force: number;
  engineAmperage: number;
}

// Define the initial state using that type
const initialState: Characteristics[] = [];

export const changeTrainDataSlice = createSlice({
  name: "TrainData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    trainDataAdded: (state, action: PayloadAction<Characteristics>) => {
      state.push(action.payload);
    },
    trainDataDeleted: () => {
      return initialState;
    },
  },
});

export const { trainDataAdded, trainDataDeleted } =
  changeTrainDataSlice.actions;

export default changeTrainDataSlice.reducer;
