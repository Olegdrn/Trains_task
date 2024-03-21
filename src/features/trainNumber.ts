import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
export interface trainNumberType {
  number: string;
}
const initialState: trainNumberType = {
  number: "",
};

export const changeTrainNumberSlice = createSlice({
  name: "TrainNumber",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    trainNumberChanged: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
  },
});

export const { trainNumberChanged } = changeTrainNumberSlice.actions;

export default changeTrainNumberSlice.reducer;
